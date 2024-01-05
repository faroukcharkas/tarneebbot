import { Suit } from "@/globals";
import { CardModel } from "./CardModel";

export class HandModel {
  // Order of cards will be descending
  cards: { [suit in Suit]: CardModel[] } = {
    [Suit.Diamond]: [],
    [Suit.Club]: [],
    [Suit.Heart]: [],
    [Suit.Spade]: [],
  };
  player: number;

  constructor(player: number) {
    this.player = player;
  }

  dealInCard(card: CardModel): void {
    card.setPlayer(this.player);
    let targetArray = this.cards[card.suit];
    if (targetArray.length == 0) {
      targetArray.push(card);
    } else if (targetArray.length == 1) {
      if (targetArray[0].hasAHigherValueThan(card)) {
        targetArray.push(card);
      } else {
        targetArray.splice(0, 0, card);
      }
    } else {
      let i = 0;
      while (i < targetArray.length) {
        if (targetArray[i].hasAHigherValueThan(card)) {
          i += 1;
        } else {
          targetArray.splice(i, 0, card);
          break;
        }
        if (i == targetArray.length - 1) {
          targetArray.push(card);
          break;
        }
      }
    }
  }

  pullFromHighestOf(suit: Suit): CardModel {
    let res = this.cards[suit][0];
    this.cards[suit].shift();
    return res;
  }

  pullFromLowestOf(suit: Suit): CardModel {
    let res = this.cards[suit][this.cards[suit].length - 1];
    this.cards[suit].pop();
    return res;
  }

  pullCard(value: number, suit: Suit): CardModel {
    let targetArray = this.cards[suit];
    let i = 0;
    let res;
    while (i < targetArray.length) {
      if (targetArray[i].value === value && targetArray[i].suit === suit) {
        res = targetArray[i];
        targetArray.splice(i, 1);
        return res;
      }
      i += 1;
    }
    return new CardModel(-1, Suit.Spade);
  }

  hasCard(value: number, suit: Suit): boolean {
    let targetArray = this.cards[suit];
    let i = 0;
    while (i < targetArray.length) {
      if (targetArray[i].value === value && targetArray[i].suit === suit) {
        return true;
      }
      i += 1;
    }
    return false;
  }

  countStrongCardsOfSuit(suit: Suit): number {
    return 0;

    let targetArray = this.cards[suit];

    if (targetArray.length == 0) {
    }

    let i = 1;
    let res = 0;

    // TODO: Take into account card flush
    // E.g. [13, 12, 11, 10] = Strong Cards = 3
    // E.g. [14, 12, 11, 10] = Strong Cards = 3
    // E.g. [11, 10] = Strong Cards = 0

    // Algorithm: For each consecutive card, count +1, for each gap -1, then subtract 14-leadingCard. But if first consecutive > gap, then +gap
    let gaps = 0;
    let consecutives = 0;
    let lastNumber = 0;
    while (i < targetArray.length) {}
  }
}
