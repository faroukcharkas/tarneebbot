import '@testing-library/jest-dom'
import { RoundResultModel } from '../src/models/RoundResultModel';
import { Team } from '../src/globals';

describe("Testing the round result model", () => {
    it("Pro team clean sweep", () => {
        let testModel = new RoundResultModel(Team.Pro, 13, 13, 0);

        expect(testModel.getProTeamPointChange()).toBe(13);
    })
    it("Pro team failed to make 8", () => {
        let testModel = new RoundResultModel(Team.Pro, 8, 7, 6);

        expect(testModel.getProTeamPointChange()).toBe(-8);
        expect(testModel.getAntiTeamPointChange()).toBe(6);
    })
})