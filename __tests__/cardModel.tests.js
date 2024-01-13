import '@testing-library/jest-dom';
import { CardModel } from '../src/models/CardModel';
import { Suit } from '../src/globals';

describe("Testing the card model superiority calculation", () => {
    it("Testing two round-tarneeb cards are graded off value", () => {
        let roundTarneeb = Suit.Spade;
        let trickTarneeb = Suit.Spade;

        let card1 = new CardModel(2, Suit.Spade);
        let card2 = new CardModel(3, Suit.Spade);

        expect(card1.isBetterThan(card2, roundTarneeb, trickTarneeb)).toBe(false);
        expect(card2.isBetterThan(card1, roundTarneeb, trickTarneeb)).toBe(true);
    });
    it("Testing if round-tarneeb trumps trick-tarneeb", () => {
        let roundTarneeb = Suit.Spade;
        let trickTarneeb = Suit.Club;

        let card1 = new CardModel(2, Suit.Club);
        let card2 = new CardModel(3, Suit.Spade);

        expect(card1.isBetterThan(card2, roundTarneeb, trickTarneeb)).toBe(false);
        expect(card2.isBetterThan(card1, roundTarneeb, trickTarneeb)).toBe(true);
    });
    it("Testing if round-tarneeb trumps regular card, even when higher value", () => {
        let roundTarneeb = Suit.Spade;
        let trickTarneeb = Suit.Club;

        let card1 = new CardModel(14, Suit.Diamond);
        let card2 = new CardModel(3, Suit.Spade);

        expect(card1.isBetterThan(card2, roundTarneeb, trickTarneeb)).toBe(false);
        expect(card2.isBetterThan(card1, roundTarneeb, trickTarneeb)).toBe(true);
    });
});