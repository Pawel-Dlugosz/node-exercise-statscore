import { TScoreArray } from "../../interfaces/score-array.type";
import { IScoreFormatter } from "../../interfaces/score-formatter.interface";

export class ArrayFormatter implements IScoreFormatter<TScoreArray> {
  public formatScore(score: TScoreArray): string {
    return score.flatMap((score) => score).join(", ");
  }
}
