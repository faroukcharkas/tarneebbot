import PlayingCard from "@/components/PlayingCard";
import { Suit } from "@/globals";

export class CardModel {
  value: number;
  suit: Suit;
  player: number | undefined;

  constructor(value: number, suit: Suit) {
    this.suit = suit;
    this.value = value;
  }

  setPlayer(player: number) {
    this.player = player;
  }

  isBetterThan(other: CardModel, tarneebSuit: Suit, roundSuit: Suit): boolean {
    if (other.suit === tarneebSuit || this.suit == tarneebSuit) {
      if (this.suit === tarneebSuit) {
        return other.value < this.value;
      } else {
        return false;
      }
    } else if (other.suit === roundSuit || this.suit == roundSuit) {
      if (this.suit === tarneebSuit) {
        return other.value < this.value;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  hasSameSuitOf(other: CardModel): boolean {
    return other.suit === this.suit;
  }

  getComponent(): JSX.Element {
    return (
      <PlayingCard
        value={this.value}
        suit={this.suit}
        player={this.player || -1} // TODO: Make this more solid
      />
    );
  }

  isTarneeb(tarneebSuit: Suit): boolean {
    return this.suit === tarneebSuit;
  }

  hasAHigherValueThan(other: CardModel): boolean {
    return this.value > other.value;
  }
}
