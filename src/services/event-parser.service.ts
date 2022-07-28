import { IScoreFormatter } from "../interfaces/score-formatter.interface";
import { IMatch } from "../interfaces/match.interface";
import { ESport } from "../interfaces/sport.enum";
import { TScore } from "../interfaces/score.type";

export type TConfig = {
  [key in ESport]: { separator: string; formatter: IScoreFormatter<TScore> };
};

export class EventParserService {
  private readonly configKeys: Array<string>;

  constructor(private readonly config: TConfig) {
    this.configKeys = Object.keys(config);
  }

  public makeEventName(match: IMatch<TScore>): string {
    const { sport, participant1, participant2 } = match;
    this.assertSportInConfig(sport);
    const separator = this.getSeparatorType(sport);
    return [participant1, separator, participant2].join(" ");
  }

  public formatScore(match: IMatch<TScore>): string {
    const { sport, score } = match;
    this.assertSportInConfig(sport);
    return this.getFormatter(sport).formatScore(score);
  }

  private getSeparatorType(sport: ESport): string {
    return this.config[sport].separator;
  }

  private getFormatter(sport: ESport): IScoreFormatter<TScore> {
    return this.config[sport].formatter;
  }

  private assertSportInConfig(sport: ESport): void {
    if (!this.configKeys.includes(sport)) {
      throw new Error(`There is no configuration for sport: ${sport}`);
    }
  }
}
