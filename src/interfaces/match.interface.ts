import { TScore } from "./score.type";
import { ESport } from "./sport.enum";

export interface IMatch<T extends TScore> {
  sport: ESport;
  participant1: string;
  participant2: string;
  score: T;
}
