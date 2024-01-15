import { Suit } from "@/globals";
import { CardModel } from "./CardModel";
import { HandModel } from "./HandModel";
import { PlayerModel } from "./PlayerModel";
import { RoundModel } from "./RoundModel";
import { Team } from "@/globals";
import { useGameStore } from "@/store/zustand";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class TrickModel {
  cardsPlayed: { [team in Team]: CardModel[] };
  cardsPutDown: number;
  roundModel: RoundModel;
  trickTarneeb?: Suit;
  dominantPlayer: number;

  constructor(roundModel: RoundModel) {
    this.roundModel = roundModel;
    this.cardsPutDown = 0;
    this.cardsPlayed = {
      [Team.Pro]: [],
      [Team.Anti]: [],
    };
    this.dominantPlayer = -1;
  }

  async execute(): Promise<number> {
    let dominantPlayer = -1;
    let dominantCard = null;
    const players = this.roundModel.getPlayers();
    const startingPlayerIndex = Math.max(
      this.roundModel.getStartingPlayer() - 1,
      0
    );

    for (let i = 0; i < 4; i++) {
      const playerIndex = (i + startingPlayerIndex) % 4;
      const currentPlayer = players[playerIndex];

      const cardDrawn = await currentPlayer.askForCard(
        this.cardsPlayed,
        this.roundModel,
        this.trickTarneeb
      );
      this.cardsPutDown += 1;
      this.cardsPlayed[currentPlayer.team].push(cardDrawn);

      // Set the first card as the dominant card if none is set
      if (dominantCard === null) {
        dominantCard = cardDrawn;
        dominantPlayer = playerIndex;
      }

      // Update the trick tarneeb suit with the first card's suit
      this.trickTarneeb = this.trickTarneeb || cardDrawn.suit;

      // Compare the current card with the dominant card
      if (
        cardDrawn.isBetterThan(
          dominantCard,
          this.roundModel.roundTarneeb,
          this.trickTarneeb
        )
      ) {
        dominantCard = cardDrawn;
        dominantPlayer = playerIndex;
      }
    }

    delay(1000);
    useGameStore.getState().setPlayer1CardDown(false);
    useGameStore.getState().setPlayer2CardDown(false);
    useGameStore.getState().setPlayer3CardDown(false);
    useGameStore.getState().setPlayer4CardDown(false);

    this.dominantPlayer = dominantPlayer + 1;
    return dominantPlayer + 1;
  }

  getDominantTeam(): Team {
    if (this.dominantPlayer % 2 == 1) {
      return Team.Pro;
    } else {
      return Team.Anti;
    }
  }
}
