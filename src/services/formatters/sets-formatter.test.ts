import { IScoreFormatter } from "../../interfaces/score-formatter.interface";
import { SetsFormatter } from "./sets-formatter";

describe("SetsFormatter", () => {
  describe("formatScore", () => {
    let formatter: IScoreFormatter<string>;

    beforeAll(() => {
      formatter = new SetsFormatter();
    });

    test.each([
      ["3:0,25:23", "Main score: 3:0 (set1 25:23)"],
      [
        "3:0,25:23,25:19,25:21",
        "Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)",
      ],
    ])("should format %j to %s", (score, expected) => {
      expect(formatter.formatScore(score)).toStrictEqual(expected);
    });
  });
});
