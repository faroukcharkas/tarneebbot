import { Suit, Team } from "@/globals";
import { CardModel } from "./CardModel";
import { HandModel } from "./HandModel";
import { TrickModel } from "./TrickModel";
import { RoundModel } from "./RoundModel";
import { useGameStore } from "@/store/zustand";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class PlayerModel {
  hand: HandModel;
  betRisk: number;
  team: Team;
  id: number;

  constructor(hand: HandModel, team: Team, betRisk: number, id: number) {
    this.hand = hand;
    this.betRisk = betRisk;
    this.team = team;
    this.id = id;
  }

  getHand(): HandModel {
    return this.hand;
  }

  setHand(newHand: HandModel): void {
    this.hand = newHand;
  }

  countStrongCards(): number {
    return this.hand.countStrongCardsInHand();
  }

  getMostDominantSuit(): Suit {
    return this.hand.pickStrongestSuit();
  }

  getBetRisk(): number {
    return this.betRisk;
  }

  setBetRisk(newBetRisk: number): void {
    this.betRisk = newBetRisk;
  }

  async askForCard(
    cardsPlayed: { [team in Team]: CardModel[] },
    roundModel: RoundModel,
    trickTarneeb?: Suit
  ): Promise<CardModel> {
    let selectedCard: CardModel;

    if (trickTarneeb === undefined) {
      selectedCard = this.hand.pullFirstCardInHand();
    } else {
      if (this.hand.countCardsInSuit(roundModel.roundTarneeb) > 0) {
        selectedCard = this.hand.pullFromHighestOf(roundModel.roundTarneeb);
      } else if (this.hand.countCardsInSuit(trickTarneeb) > 0) {
        selectedCard = this.hand.pullFromHighestOf(trickTarneeb);
      } else {
        selectedCard = this.hand.pullFirstCardInHand();
      }
    }

    if (this.id === 1) {
      useGameStore.getState().setPlayer1Card(selectedCard);
      useGameStore.getState().setPlayer1CardDown(true);
    } else if (this.id === 2) {
      useGameStore.getState().setPlayer2Card(selectedCard);
      useGameStore.getState().setPlayer2CardDown(true);
    } else if (this.id === 3) {
      useGameStore.getState().setPlayer3Card(selectedCard);
      useGameStore.getState().setPlayer3CardDown(true);
      useGameStore.getState().setCards(this.hand.getCards());
    } else {
      useGameStore.getState().setPlayer4Card(selectedCard);
      useGameStore.getState().setPlayer4CardDown(true);
    }

    await delay(500);

    return selectedCard;
  }

  askForBet(highestBet: number): number {
    if (highestBet < 7) {
      return 7;
    } else {
      return -1;
    }
    // if (this.countStrongCards() + this.betRisk > highestBet) {
    //   return this.countStrongCards() + this.betRisk;
    // } else {
    //   return -1;
    // }
  }
}
