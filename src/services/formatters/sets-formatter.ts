import { IScoreFormatter } from "../../interfaces/score-formatter.interface";
import { parseScores } from "./utlis/parse-scores";

export class SetsFormatter implements IScoreFormatter<string> {
  public formatScore(score: string): string {
    const [mainScore, ...sets] = parseScores(score);
    return `Main score: ${mainScore} (${this.formatSets(sets)})`;
  }

  private formatSets(sets: Array<string>) {
    return sets.map((set, index) => `set${index + 1} ${set}`).join(", ");
  }
}
