import { TScore } from "./score.type";

export interface IScoreFormatter<T extends TScore> {
  formatScore(score: T): string;
}
