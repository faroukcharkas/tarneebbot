import '@testing-library/jest-dom'
import {HandModel} from '../src/models/HandModel';
import { CardModel } from '../src/models/CardModel';
import { Suit } from '../src/globals';

describe('Testing strong card counting', () => {
    // Algorithm: For each consecutive card, count +1, for each gap -1, then subtract 14-leadingCard. But if first consecutive > gap, then +gap
    it('When full suit', () => {
        const testHand = new HandModel(1);

        // Input: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
        // Output: 13

        testHand.dealInCard(new CardModel(14, Suit.Club));
        testHand.dealInCard(new CardModel(13, Suit.Club));
        testHand.dealInCard(new CardModel(12, Suit.Club));
        testHand.dealInCard(new CardModel(11, Suit.Club));
        testHand.dealInCard(new CardModel(10, Suit.Club));
        testHand.dealInCard(new CardModel(9, Suit.Club));
        testHand.dealInCard(new CardModel(8, Suit.Club));
        testHand.dealInCard(new CardModel(7, Suit.Club));
        testHand.dealInCard(new CardModel(6, Suit.Club));
        testHand.dealInCard(new CardModel(5, Suit.Club));
        testHand.dealInCard(new CardModel(4, Suit.Club));
        testHand.dealInCard(new CardModel(3, Suit.Club));
        testHand.dealInCard(new CardModel(2, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(13);

    });
    it('When full hierarchy', () => {
        const testHand = new HandModel(1);

        // Input: [14, 13, 12, 11]
        // Output: 4

        testHand.dealInCard(new CardModel(14, Suit.Club));
        testHand.dealInCard(new CardModel(13, Suit.Club));
        testHand.dealInCard(new CardModel(12, Suit.Club));
        testHand.dealInCard(new CardModel(11, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(4);

    });
    it('When full hierarchy, but missing Ace', () => {
        const testHand = new HandModel(1);

        // Input: [13, 12, 11]
        // Output: 2

        testHand.dealInCard(new CardModel(13, Suit.Club));
        testHand.dealInCard(new CardModel(12, Suit.Club));
        testHand.dealInCard(new CardModel(11, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(2);

    });
    it('When full hierarchy, but missing King and Ace', () => {
        const testHand = new HandModel(1);

        // Input: [12, 11]
        // Output: 0

        testHand.dealInCard(new CardModel(12, Suit.Club));
        testHand.dealInCard(new CardModel(11, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(2);

    });
    it('When full suit, but missing 2 consecutive cards, but first consecutive numbers length more than gap', () => {
        const testHand = new HandModel(1);

        // Input: [14, 13, 10, 9, 8, 7, 6, 5, 4, 3, 2]
        // Output: 11

        testHand.dealInCard(new CardModel(14, Suit.Club));
        testHand.dealInCard(new CardModel(13, Suit.Club));
        testHand.dealInCard(new CardModel(10, Suit.Club));
        testHand.dealInCard(new CardModel(9, Suit.Club));
        testHand.dealInCard(new CardModel(8, Suit.Club));
        testHand.dealInCard(new CardModel(7, Suit.Club));
        testHand.dealInCard(new CardModel(6, Suit.Club));
        testHand.dealInCard(new CardModel(5, Suit.Club));
        testHand.dealInCard(new CardModel(4, Suit.Club));
        testHand.dealInCard(new CardModel(3, Suit.Club));
        testHand.dealInCard(new CardModel(2, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(11);

    });
    it('When just ace', () => {
        const testHand = new HandModel(1);

        // Input: [14]
        // Output: 1

        testHand.dealInCard(new CardModel(14, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(1);
    });
    it('When just King', () => {
        const testHand = new HandModel(1);

        // Input: [13]
        // Output: 0

        testHand.dealInCard(new CardModel(13, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(0);
    });
    it('When just Queen', () => {
        const testHand = new HandModel(1);

        // Input: [12]
        // Output: 0

        testHand.dealInCard(new CardModel(12, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(0);
    });
    it('When just 2', () => {
        const testHand = new HandModel(1);

        // Input: [2]
        // Output: 0

        testHand.dealInCard(new CardModel(2, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(0);
    });
    it('When full suit, but missing 2', () => {
        const testHand = new HandModel(1);

        // Input: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3]
        // Output: 12

        testHand.dealInCard(new CardModel(14, Suit.Club));
        testHand.dealInCard(new CardModel(13, Suit.Club));
        testHand.dealInCard(new CardModel(10, Suit.Club));
        testHand.dealInCard(new CardModel(9, Suit.Club));
        testHand.dealInCard(new CardModel(8, Suit.Club));
        testHand.dealInCard(new CardModel(7, Suit.Club));
        testHand.dealInCard(new CardModel(6, Suit.Club));
        testHand.dealInCard(new CardModel(5, Suit.Club));
        testHand.dealInCard(new CardModel(4, Suit.Club));
        testHand.dealInCard(new CardModel(3, Suit.Club));
        testHand.dealInCard(new CardModel(2, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(12);
    });
});