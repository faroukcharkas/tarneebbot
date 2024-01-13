import { Suit } from "@/globals";
import { CardModel } from "./CardModel";
import { HandModel } from "./HandModel";

export class DeckModel {
  cards: CardModel[] = [];

  constructor() {
    function shuffle(array: CardModel[]) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }

    for (var i = 2; i < 15; i++) {
      this.cards.push(new CardModel(i, Suit.Club));
      this.cards.push(new CardModel(i, Suit.Diamond));
      this.cards.push(new CardModel(i, Suit.Spade));
      this.cards.push(new CardModel(i, Suit.Heart));
    }

    this.cards = shuffle(this.cards);
  }

  dealAHand(player: number): HandModel {
    let res = new HandModel(player);
    for (let _ = 0; _ < 13; _++) {
      res.dealInCard(this.cards.shift() || new CardModel(-1, Suit.Spade));
    }
    return res;
  }

  dealStraightSuit(player: number, suit: Suit): HandModel {
    let res = new HandModel(player);
    let deleteCount = 0;
    for (let i = 0; i < 52; i++) {
      if (this.cards[i - deleteCount].suit == suit) {
        res.dealInCard(this.cards[i - deleteCount]);
        this.cards.splice(i - deleteCount, 1);
        deleteCount++;
      }
    }
    return res;
  }

  getCards(): CardModel[] {
    return this.cards;
  }
}
