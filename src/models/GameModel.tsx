import { Suit, Team } from "@/globals";
import { CardModel } from "./CardModel";
import { HandModel } from "./HandModel";
import { PlayerModel } from "./PlayerModel";
import { RoundModel } from "./RoundModel";
import { DeckModel } from "./DeckModel";
import { useGameStore } from "@/store/zustand";

export class GameModel {
  bettingStart: number;
  proTeamPoints: number;
  antiTeamPoints: number;
  players: PlayerModel[];

  constructor(players: PlayerModel[]) {
    this.bettingStart = 1;
    this.proTeamPoints = 0;
    this.antiTeamPoints = 0;
    this.players = players;
  }

  async execute() {
    console.log("Executing game model");
    const MAX_ROUNDS = 50;
    let rounds = 0;
    while (this.antiTeamPoints < 31 && this.proTeamPoints < 31) {
      // Loop until a team makes 31 points

      if (rounds > MAX_ROUNDS) {
        console.warn("Hit max rounds.");
        break;
      }

      let roundBet = 6; // Minimum bet
      let bettingPlayer = -1;
      let selectedTarneeb = Suit.Spade;
      let playerBets = Array(4).fill(-1); // Array to track player bets, initialized to -1 (indicating no bet yet)
      let cardDeck = new DeckModel();

      for (var i = 0; i < this.players.length; i++) {
        this.players[i].setHand(cardDeck.dealAHand(i + 1));
        console.log(`Handed out deck for Player #${i + 1}`);
      }

      useGameStore.getState().setCards(this.players[2].hand.getCards());

      let activeBetting = true;
      while (activeBetting) {
        let passCount = 0; // Counter for the number of passes

        for (let i = 0; i < 4; i++) {
          let playerIndex = Math.max(0, (i + this.bettingStart - 1) % 4);

          // If the player has already passed, continue to the next player
          if (playerBets[playerIndex] === -1 && i !== 0) {
            passCount++;
            continue;
          }

          let currentPlayerBet = this.players[playerIndex].askForBet(roundBet);

          // Check if the player passes
          if (currentPlayerBet === -1) {
            passCount++;
          } else if (currentPlayerBet >= 7) {
            roundBet = currentPlayerBet; // Update the round bet if the current bet is valid and higher
            bettingPlayer = playerIndex;
            playerBets[playerIndex] = currentPlayerBet;
            passCount = 0; // Reset pass count when a valid bet is made
          }
        }

        // Check if all players have passed
        if (passCount === 4) {
          // Reset betting if all players pass
          playerBets.fill(-1);
          roundBet = 6; // Reset the bet to the minimum
          bettingPlayer = -1;
        } else {
          // End the betting cycle if no new bets are made
          activeBetting = false;
        }
      }

      this.bettingStart = (this.bettingStart + 1) % 4; // Ensure bettingStart remains within range

      useGameStore.getState().setRoundBet(roundBet);
      useGameStore.getState().setRoundTarneeb(selectedTarneeb);

      if (bettingPlayer % 2 == 0) {
        useGameStore.getState().setBettingTeam(Team.Anti);
      } else {
        useGameStore.getState().setBettingTeam(Team.Pro);
      }

      let round = new RoundModel(
        this.players,
        selectedTarneeb,
        roundBet,
        bettingPlayer
      );

      let results = await round.execute();

      this.proTeamPoints += results.getProTeamPointChange();
      this.antiTeamPoints += results.getAntiTeamPointChange();
      useGameStore.getState().resetProTricksLost();
      useGameStore.getState().resetProTricksWon();
      useGameStore
        .getState()
        .changeProGameScore(results.getProTeamPointChange());
      useGameStore
        .getState()
        .changeAntiGameScore(results.getAntiTeamPointChange());
      rounds++;
    }
  }
}
