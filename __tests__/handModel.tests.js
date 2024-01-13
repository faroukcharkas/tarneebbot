import '@testing-library/jest-dom'
import {HandModel} from '../src/models/HandModel';
import { CardModel } from '../src/models/CardModel';
import { Suit } from '../src/globals';

describe('Testing strong card counting', () => {
    it('When full suit', () => {
        const testHand = new HandModel(1);

        // Input: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
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

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(0);

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
    it('When full suit, but missing #2', () => {
        const testHand = new HandModel(1);

        // Input: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3]
        // Output: 12

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

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(12);
    });
    it('Suit is empty', () => {
        const testHand = new HandModel(1);

        // Input: []
        // Output: 0

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(0);
    });
    // Checked up until here
    it('When full suit, but missing 3 consecutive cards', () => {
        const testHand = new HandModel(1);

        // Input: [14, 13, 9, 8, 7, 6, 5, 4, 3, 2]
        // Output: 9

        testHand.dealInCard(new CardModel(14, Suit.Club));
        testHand.dealInCard(new CardModel(13, Suit.Club));
        testHand.dealInCard(new CardModel(9, Suit.Club));
        testHand.dealInCard(new CardModel(8, Suit.Club));
        testHand.dealInCard(new CardModel(7, Suit.Club));
        testHand.dealInCard(new CardModel(6, Suit.Club));
        testHand.dealInCard(new CardModel(5, Suit.Club));
        testHand.dealInCard(new CardModel(4, Suit.Club));
        testHand.dealInCard(new CardModel(3, Suit.Club));
        testHand.dealInCard(new CardModel(2, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(9);

    });
    it('When full suit, but missing 4 consecutive cards', () => {
        const testHand = new HandModel(1);

        // Input: [14, 13, 8, 7, 6, 5, 4, 3, 2]
        // Output: 7

        testHand.dealInCard(new CardModel(14, Suit.Club));
        testHand.dealInCard(new CardModel(13, Suit.Club));
        testHand.dealInCard(new CardModel(8, Suit.Club));
        testHand.dealInCard(new CardModel(7, Suit.Club));
        testHand.dealInCard(new CardModel(6, Suit.Club));
        testHand.dealInCard(new CardModel(5, Suit.Club));
        testHand.dealInCard(new CardModel(4, Suit.Club));
        testHand.dealInCard(new CardModel(3, Suit.Club));
        testHand.dealInCard(new CardModel(2, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(7);

    });
    it('When full suit, but missing 5 consecutive cards', () => {
        const testHand = new HandModel(1);

        // Input: [14, 13, 7, 6, 5, 4, 3, 2]
        // Output: 3

        testHand.dealInCard(new CardModel(14, Suit.Club));
        testHand.dealInCard(new CardModel(13, Suit.Club));
        testHand.dealInCard(new CardModel(7, Suit.Club));
        testHand.dealInCard(new CardModel(6, Suit.Club));
        testHand.dealInCard(new CardModel(5, Suit.Club));
        testHand.dealInCard(new CardModel(4, Suit.Club));
        testHand.dealInCard(new CardModel(3, Suit.Club));
        testHand.dealInCard(new CardModel(2, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(5);

    });
    it('When full suit, but missing 6 consecutive cards', () => {
        const testHand = new HandModel(1);

        // Input: [14, 13, 6, 5, 4, 3, 2]
        // Output: 1

        testHand.dealInCard(new CardModel(14, Suit.Club));
        testHand.dealInCard(new CardModel(13, Suit.Club));
        testHand.dealInCard(new CardModel(6, Suit.Club));
        testHand.dealInCard(new CardModel(5, Suit.Club));
        testHand.dealInCard(new CardModel(4, Suit.Club));
        testHand.dealInCard(new CardModel(3, Suit.Club));
        testHand.dealInCard(new CardModel(2, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(3);

    });
    it('When full suit, but missing 7 consecutive cards', () => {
        const testHand = new HandModel(1);

        // Input: [14, 13, 5, 4, 3, 2]
        // Output: 2

        testHand.dealInCard(new CardModel(14, Suit.Club));
        testHand.dealInCard(new CardModel(13, Suit.Club));
        testHand.dealInCard(new CardModel(5, Suit.Club));
        testHand.dealInCard(new CardModel(4, Suit.Club));
        testHand.dealInCard(new CardModel(3, Suit.Club));
        testHand.dealInCard(new CardModel(2, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(2);

    });
    it('Alternating starting with #A', () => {
        const testHand = new HandModel(1);

        // Input: [13, 11, 9, 7, 5, 3]
        // Output: 0

        testHand.dealInCard(new CardModel(13, Suit.Club));
        testHand.dealInCard(new CardModel(11, Suit.Club));
        testHand.dealInCard(new CardModel(9, Suit.Club));
        testHand.dealInCard(new CardModel(7, Suit.Club));
        testHand.dealInCard(new CardModel(5, Suit.Club));
        testHand.dealInCard(new CardModel(3, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(0);

    });
    it('Alternating starting with #K', () => {
        const testHand = new HandModel(1);

        // Input: [13, 11, 9, 7, 5, 3]
        // Output: 0

        testHand.dealInCard(new CardModel(13, Suit.Club));
        testHand.dealInCard(new CardModel(11, Suit.Club));
        testHand.dealInCard(new CardModel(9, Suit.Club));
        testHand.dealInCard(new CardModel(7, Suit.Club));
        testHand.dealInCard(new CardModel(5, Suit.Club));
        testHand.dealInCard(new CardModel(3, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(0);

    });
    // it('Random Set', () => {
    //     const testHand = new HandModel(1);

    //     // Input: [14, 13, 12, 11, 8, 6]
    //     // Output: 4

    //     testHand.dealInCard(new CardModel(14, Suit.Club));
    //     testHand.dealInCard(new CardModel(13, Suit.Club));
    //     testHand.dealInCard(new CardModel(12, Suit.Club));
    //     testHand.dealInCard(new CardModel(11, Suit.Club));
    //     testHand.dealInCard(new CardModel(8, Suit.Club));
    //     testHand.dealInCard(new CardModel(6, Suit.Club));

    //     expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(4);

    // });
    it('Random Set', () => {
        const testHand = new HandModel(1);

        // Input: [14, 11, 9, 7, 3, 2]
        // Output: 1

        testHand.dealInCard(new CardModel(14, Suit.Club));
        testHand.dealInCard(new CardModel(11, Suit.Club));
        testHand.dealInCard(new CardModel(9, Suit.Club));
        testHand.dealInCard(new CardModel(7, Suit.Club));
        testHand.dealInCard(new CardModel(3, Suit.Club));
        testHand.dealInCard(new CardModel(2, Suit.Club));

        expect(testHand.countStrongCardsOfSuit(Suit.Club)).toBe(1);

    });
});