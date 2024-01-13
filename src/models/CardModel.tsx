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

  isBetterThan(
    other: CardModel,
    roundTarneeb: Suit,
    trickTarneeb: Suit
  ): boolean {
    if (this.suit === roundTarneeb || other.suit === roundTarneeb) {
      if (this.suit === roundTarneeb && other.suit !== roundTarneeb) {
        return true;
      } else if (this.suit === roundTarneeb && other.suit === roundTarneeb) {
        return this.value > other.value;
      } else {
        return false;
      }
    } else if (this.suit === trickTarneeb || other.suit === trickTarneeb) {
      if (this.suit === trickTarneeb && other.suit !== trickTarneeb) {
        return true;
      } else if (this.suit === trickTarneeb && other.suit === trickTarneeb) {
        return this.value > other.value;
      } else {
        return false;
      }
    } else {
      return this.value > other.value; // Here, both cards are of neither roundTarneeb nor trickTarneeb suits
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
