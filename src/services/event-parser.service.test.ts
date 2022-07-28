import { IMatch } from "../interfaces/match.interface";
import { IScoreFormatter } from "../interfaces/score-formatter.interface";
import { ESport } from "../interfaces/sport.enum";
import { EventParserService } from "./event-parser.service";

const getMockMatch = (sport: ESport): IMatch<string> => ({
  participant1: "A",
  participant2: "B",
  score: "",
  sport,
});

describe("EventParserService", () => {
  let mockFormatter: jest.Mocked<IScoreFormatter<string>>;
  let parser: EventParserService;

  beforeAll(() => {
    mockFormatter = {
      formatScore: jest.fn().mockReturnValue("score"),
    };

    const mockConfig = {
      [ESport.basketball]: { separator: "-", formatter: mockFormatter },
      [ESport.tennis]: { separator: "vs", formatter: mockFormatter },
    };

    parser = new EventParserService(mockConfig as any);
  });

  describe("makeEventName", () => {
    it("should generate the name 'A - B'", () => {
      const match = getMockMatch(ESport.basketball);
      expect(parser.makeEventName(match)).toStrictEqual("A - B");
    });

    it("should generate the name 'A vs B'", () => {
      const match = getMockMatch(ESport.tennis);
      expect(parser.makeEventName(match)).toStrictEqual("A vs B");
    });

    it("should throw an exception if the sport is not set up", () => {
      const sport = ESport.volleyball;
      const match = getMockMatch(sport);
      expect(() => parser.makeEventName(match)).toThrow(
        `There is no configuration for sport: ${sport}`
      );
    });
  });

  describe("formatScore", () => {
    it("should call the method formatScore on IScoreFormatter", () => {
      parser.formatScore(getMockMatch(ESport.basketball));
      expect(mockFormatter.formatScore.mock.calls.length).toBe(1);
    });

    it("should throw an exception if the sport is not set up", () => {
      const sport = ESport.volleyball;
      const match = getMockMatch(sport);
      expect(() => parser.formatScore(match)).toThrow(
        `There is no configuration for sport: ${sport}`
      );
    });
  });
});
