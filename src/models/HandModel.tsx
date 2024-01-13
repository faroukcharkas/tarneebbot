import { Suit } from "@/globals";
import { CardModel } from "./CardModel";
import { log } from "console";

export class HandModel {
  // Order of cards will be descending
  cards: { [suit in Suit]: CardModel[] };
  player: number;

  constructor(player: number) {
    this.player = player;
    this.cards = {
      [Suit.Diamond]: [],
      [Suit.Club]: [],
      [Suit.Heart]: [],
      [Suit.Spade]: [],
    };
  }

  getCards(): CardModel[] {
    return this.cards[Suit.Diamond]
      .concat(this.cards[Suit.Heart])
      .concat(this.cards[Suit.Club])
      .concat(this.cards[Suit.Spade]);
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

  pullFirstCardInHand(): CardModel {
    let cardsInHand: CardModel[] = this.getCards();
    return this.pullCard(cardsInHand[0].value, cardsInHand[0].suit);
  }

  countCardsInSuit(suit: Suit): number {
    return this.cards[suit].length;
  }

  countStrongCardsOfSuit(suit: Suit): number {
    let cards = this.cards[suit];

    // Cover [14], [<13], and [] edge cases
    if (cards.length === 0) {
      return 0;
    } else if (cards.length === 1) {
      return cards[0].value === 14 ? 1 : 0;
    }

    let leadingConsecutives = 0;
    let laterConsecutives = 0;
    let gaps = 0;
    let isLeading = true; // Flag to distinguish leading and later consecutives

    for (var i = 0; i < cards.length - 1; i++) {
      if (cards[i].value === cards[i + 1].value + 1) {
        if (isLeading) {
          leadingConsecutives++;
        } else {
          laterConsecutives++;
        }
      } else {
        if (isLeading) {
          // First gap encountered, switch to counting later consecutives
          isLeading = false;
          // Increment leadingConsecutives to account for the current card
          leadingConsecutives++;
        }
        // Count gaps
        gaps += cards[i].value - cards[i + 1].value - 1;
      }
    }

    // Add the last card to the appropriate count
    if (isLeading) {
      leadingConsecutives++;
    } else {
      laterConsecutives++;
    }

    if (cards[0].value !== 14) {
      leadingConsecutives -= 14 - cards[0].value;
    }

    return Math.max(
      leadingConsecutives +
        laterConsecutives -
        Math.max(0, gaps - leadingConsecutives),
      leadingConsecutives
    );
  }

  countStrongCardsInHand(): number {
    return (
      this.countStrongCardsOfSuit(Suit.Club) +
      this.countStrongCardsOfSuit(Suit.Diamond) +
      this.countStrongCardsOfSuit(Suit.Heart) +
      this.countStrongCardsOfSuit(Suit.Spade)
    );
  }

  pickStrongestSuit(): Suit {
    let dominantSuit = Suit.Spade;

    let maxStrongCards = this.countStrongCardsOfSuit(Suit.Spade);
    let clubStrongCards = this.countStrongCardsOfSuit(Suit.Club);
    let heartStrongCards = this.countStrongCardsOfSuit(Suit.Heart);
    let diamondStrongCards = this.countStrongCardsOfSuit(Suit.Diamond);

    if (maxStrongCards < clubStrongCards) {
      dominantSuit = Suit.Club;
      maxStrongCards = clubStrongCards;
    }

    if (maxStrongCards < heartStrongCards) {
      dominantSuit = Suit.Heart;
      maxStrongCards = heartStrongCards;
    }

    if (maxStrongCards < diamondStrongCards) {
      dominantSuit = Suit.Diamond;
      maxStrongCards = diamondStrongCards;
    }

    return dominantSuit;
  }
}
