import '@testing-library/jest-dom';
import { GameModel } from '../src/models/GameModel';
import { PlayerModel } from '../src/models/PlayerModel';
import { HandModel } from '../src/models/HandModel';
import { Suit, Team } from '../src/globals';

jest.setTimeout(5000);

describe("Testing the game model execution", () => {
    it("Testing if game stops when one team has >=31", () => {
        let player1Model = new PlayerModel(new HandModel(1), Team.Pro, 1);
        let player2Model = new PlayerModel(new HandModel(2), Team.Anti, 1);
        let player3Model = new PlayerModel(new HandModel(3), Team.Pro, 3);
        let player4Model = new PlayerModel(new HandModel(4), Team.Anti, 1);

        let testGame = new GameModel([player1Model, player2Model, player3Model, player4Model]);
        testGame.execute();

        expect(testGame.proTeamPoints >= 31 ^ testGame.antiTeamPoints >= 31).toBe(1);
    })
});