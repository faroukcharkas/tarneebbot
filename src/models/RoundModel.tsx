import { Suit, Team } from "@/globals";
import { CardModel } from "./CardModel";
import { HandModel } from "./HandModel";
import { PlayerModel } from "./PlayerModel";
import { TrickModel } from "./TrickModel";
import { RoundResultModel } from "./RoundResultModel";
import { useGameStore } from "@/store/zustand";

export class RoundModel {
  players: PlayerModel[];
  roundTarneeb: Suit;
  cardHistory: HandModel;
  tricksPlayed: number;
  roundBet: number;
  bettingPlayer: number;
  startingPlayer: number;

  constructor(
    players: PlayerModel[],
    roundTarneeb: Suit,
    roundBet: number,
    bettingPlayer: number
  ) {
    this.players = players;
    this.roundTarneeb = roundTarneeb;
    this.cardHistory = new HandModel(-1);
    this.tricksPlayed = 0;
    this.roundBet = roundBet;
    this.bettingPlayer = bettingPlayer;
    this.startingPlayer = bettingPlayer;
  }

  getStartingPlayer(): number {
    return this.startingPlayer;
  }

  getPlayers(): PlayerModel[] {
    return this.players;
  }

  async execute(): Promise<RoundResultModel> {
    let proTeamTricksWon: number = 0;
    let antiTeamTricksWon: number = 0;

    for (this.tricksPlayed; this.tricksPlayed < 13; this.tricksPlayed++) {
      let newTrick = new TrickModel(this);
      await newTrick.execute();
      if (newTrick.getDominantTeam() == Team.Pro) {
        proTeamTricksWon++;
        useGameStore.getState().changeProTricksWon(1);
      } else {
        useGameStore.getState().changeProTricksLost(1);
      }
      this.startingPlayer = newTrick.dominantPlayer;
    }

    let bettingTeam: Team = Team.Pro;
    if (this.bettingPlayer % 2 == 0) {
      bettingTeam = Team.Anti;
    }

    return new RoundResultModel(
      bettingTeam,
      this.roundBet,
      proTeamTricksWon,
      antiTeamTricksWon
    );
  }
}
