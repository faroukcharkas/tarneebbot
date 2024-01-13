import { Team } from "@/globals";

export class RoundResultModel {
  pointChange: { [team in Team]: number };

  constructor(
    bettingTeam: Team,
    roundBet: number,
    proTeamTricksWon: number,
    antiTeamTricksWon: number
  ) {
    this.pointChange = {
      [Team.Pro]: 0,
      [Team.Anti]: 0,
    };

    if (bettingTeam === Team.Pro) {
      if (proTeamTricksWon >= roundBet) {
        this.pointChange[Team.Pro] = proTeamTricksWon;
      } else {
        this.pointChange[Team.Pro] = -1 * roundBet;
        this.pointChange[Team.Anti] = antiTeamTricksWon;
      }
    } else {
      if (antiTeamTricksWon >= roundBet) {
        this.pointChange[Team.Anti] = antiTeamTricksWon;
      } else {
        this.pointChange[Team.Anti] = -1 * roundBet;
        this.pointChange[Team.Pro] = proTeamTricksWon;
      }
    }
  }

  getProTeamPointChange(): number {
    return this.pointChange[Team.Pro];
  }

  getAntiTeamPointChange(): number {
    return this.pointChange[Team.Anti];
  }
}
