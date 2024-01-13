import { Suit, Team } from "@/globals";
import { CardModel } from "./CardModel";
import { HandModel } from "./HandModel";
import { TrickModel } from "./TrickModel";
import { RoundModel } from "./RoundModel";

export class PlayerModel {
  hand: HandModel;
  betRisk: number;
  team: Team;

  constructor(hand: HandModel, team: Team, betRisk: number) {
    this.hand = hand;
    this.betRisk = betRisk;
    this.team = team;
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

  askForCard(
    cardsPlayed: { [team in Team]: CardModel[] },
    roundModel: RoundModel,
    trickTarneeb?: Suit
  ): CardModel {
    if (trickTarneeb === undefined) {
      return this.hand.pullFirstCardInHand();
    } else {
      if (this.hand.countCardsInSuit(roundModel.roundTarneeb) > 0) {
        return this.hand.pullFromHighestOf(roundModel.roundTarneeb);
      } else if (this.hand.countCardsInSuit(trickTarneeb) > 0) {
        return this.hand.pullFromHighestOf(trickTarneeb);
      } else {
        return this.hand.pullFirstCardInHand();
      }
    }
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
