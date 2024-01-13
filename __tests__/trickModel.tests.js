import '@testing-library/jest-dom';
import { RoundModel } from '../src/models/RoundModel';
import { PlayerModel } from '../src/models/PlayerModel';
import { Suit, Team } from '../src/globals';
import { TrickModel } from '../src/models/TrickModel';
import { DeckModel } from '../src/models/DeckModel';
import { HandModel } from '../src/models/HandModel';

describe("Testing the trick model execution", () => {
    it("Testing if trick comes back with correct winning player (Player #1)", () => {
        let player1Model = new PlayerModel(new HandModel(1), Team.Pro, 0);
        let player2Model = new PlayerModel(new HandModel(2), Team.Anti, 0);
        let player3Model = new PlayerModel(new HandModel(3), Team.Pro, 0);
        let player4Model = new PlayerModel(new HandModel(4), Team.Anti, 0);

        let testRound = new RoundModel([player1Model, player2Model, player3Model, player4Model], Suit.Spade, 8, 2);
        let testDeck = new DeckModel();

        player1Model.setHand(testDeck.dealStraightSuit(1, Suit.Spade));
        player2Model.setHand(testDeck.dealAHand(2));
        player3Model.setHand(testDeck.dealAHand(3));
        player4Model.setHand(testDeck.dealAHand(4));

        let testTrick = new TrickModel(testRound);

        let winningPlayer = testTrick.execute();

        expect(winningPlayer).toBe(1);
    })
    it("Testing if trick comes back with correct winning player (Player #2)", () => {
        let player1Model = new PlayerModel(new HandModel(1), Team.Pro, 0);
        let player2Model = new PlayerModel(new HandModel(2), Team.Anti, 0);
        let player3Model = new PlayerModel(new HandModel(3), Team.Pro, 0);
        let player4Model = new PlayerModel(new HandModel(4), Team.Anti, 0);

        let testRound = new RoundModel([player1Model, player2Model, player3Model, player4Model], Suit.Spade, 8, 2);
        let testDeck = new DeckModel();

        player2Model.setHand(testDeck.dealStraightSuit(2, Suit.Spade));
        player1Model.setHand(testDeck.dealAHand(1));
        player3Model.setHand(testDeck.dealAHand(3));
        player4Model.setHand(testDeck.dealAHand(4));

        let testTrick = new TrickModel(testRound);

        let winningPlayer = testTrick.execute();

        expect(winningPlayer).toBe(2);
    })
    it("Testing if trick comes back with correct winning player (Player #3)", () => {
        let player1Model = new PlayerModel(new HandModel(1), Team.Pro, 0);
        let player2Model = new PlayerModel(new HandModel(2), Team.Anti, 0);
        let player3Model = new PlayerModel(new HandModel(3), Team.Pro, 0);
        let player4Model = new PlayerModel(new HandModel(4), Team.Anti, 0);

        let testRound = new RoundModel([player1Model, player2Model, player3Model, player4Model], Suit.Spade, 8, 2);
        let testDeck = new DeckModel();

        player3Model.setHand(testDeck.dealStraightSuit(3, Suit.Spade));
        player1Model.setHand(testDeck.dealAHand(1));
        player2Model.setHand(testDeck.dealAHand(2));
        player4Model.setHand(testDeck.dealAHand(4));

        let testTrick = new TrickModel(testRound);

        let winningPlayer = testTrick.execute();

        expect(winningPlayer).toBe(3);
    })
    it("Testing if trick comes back with correct winning player (Player #4)", () => {
        let player1Model = new PlayerModel(new HandModel(1), Team.Pro, 0);
        let player2Model = new PlayerModel(new HandModel(2), Team.Anti, 0);
        let player3Model = new PlayerModel(new HandModel(3), Team.Pro, 0);
        let player4Model = new PlayerModel(new HandModel(4), Team.Anti, 0);

        let testRound = new RoundModel([player1Model, player2Model, player3Model, player4Model], Suit.Spade, 8, 2);
        let testDeck = new DeckModel();

        player4Model.setHand(testDeck.dealStraightSuit(4, Suit.Spade));
        player1Model.setHand(testDeck.dealAHand(1));
        player2Model.setHand(testDeck.dealAHand(2));
        player3Model.setHand(testDeck.dealAHand(3));

        let testTrick = new TrickModel(testRound);

        let winningPlayer = testTrick.execute();

        expect(winningPlayer).toBe(4);
    })
    it("Testing if trick reduces from hands", () => {
        let player1Model = new PlayerModel(new HandModel(1), Team.Pro, 0);
        let player2Model = new PlayerModel(new HandModel(2), Team.Anti, 0);
        let player3Model = new PlayerModel(new HandModel(3), Team.Pro, 0);
        let player4Model = new PlayerModel(new HandModel(4), Team.Anti, 0);

        let testRound = new RoundModel([player1Model, player2Model, player3Model, player4Model], Suit.Spade, 8, 2);
        let testDeck = new DeckModel();

        player1Model.setHand(testDeck.dealStraightSuit(1, Suit.Spade));
        player2Model.setHand(testDeck.dealAHand(2));
        player3Model.setHand(testDeck.dealAHand(3));
        player4Model.setHand(testDeck.dealAHand(4));

        let testTrick = new TrickModel(testRound);

        let winningTeam = testTrick.execute();

        expect(player1Model.getHand().getCards().length).toBe(12);
    })
})
