import '@testing-library/jest-dom'
import { DeckModel } from '../src/models/DeckModel';
import { HandModel } from '../src/models/HandModel';
import { Suit } from '../src/globals';

describe("Testing the deck model constructor", () => {
    it("Creates 52 cards", () => {
        let testDeck = new DeckModel();

        expect(testDeck.cards.length).toBe(52);
    })
})

describe("Testing the deck hand dealing", () => {
    it("Creates a hand of 13 cards", () => {
        let testDeck = new DeckModel();
        let testHand = testDeck.dealAHand(1);

        expect(testHand.cards[Suit.Club].length + testHand.cards[Suit.Diamond].length + testHand.cards[Suit.Heart].length + testHand.cards[Suit.Spade].length).toBe(13);
    })
    it("Creates a hand of 13 cards (through list)", () => {
        let testDeck = new DeckModel();
        let testHand = testDeck.dealAHand(1);

        expect(testHand.getCards().length).toBe(13);
        expect(testDeck.getCards().length).toBe(39);
    })
    it("Creates a hand of 13 cards when dealing straight", () => {
        let testDeck = new DeckModel();
        let testHand = testDeck.dealStraightSuit(1, Suit.Club);

        expect(testHand.getCards().length).toBe(13);
        expect(testDeck.getCards().length).toBe(39);
    })
    it("Creates a hand of all the same suit when dealing straight", () => {
        let testDeck = new DeckModel();
        let testSuit = Suit.Diamond;
        let testHand = testDeck.dealStraightSuit(1, testSuit);

        let isTestSuit = true;
        for (var card of testHand.getCards()) {
            if (card.suit !== testSuit) {
                isTestSuit = false;
                break;
            }
        }

        expect(isTestSuit).toBe(true);
    })
})