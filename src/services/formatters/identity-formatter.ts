import { IScoreFormatter } from "../../interfaces/score-formatter.interface";

export class IdentityFormatter implements IScoreFormatter<string> {
  public formatScore(score: string): string {
    return score;
  }
}
