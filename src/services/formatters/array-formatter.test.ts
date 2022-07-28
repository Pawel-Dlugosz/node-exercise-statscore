import { IScoreFormatter } from "../../interfaces/score-formatter.interface";
import { TScoreArray } from "../../interfaces/score-array.type";
import { ArrayFormatter } from "./array-formatter";

describe("ArrayFormatter", () => {
  describe("formatScore", () => {
    let formatter: IScoreFormatter<TScoreArray>;

    beforeAll(() => {
      formatter = new ArrayFormatter();
    });

    test.each([
      [[["9:7", "2:1"]] as TScoreArray, "9:7, 2:1"],
      [
        [
          ["9:7", "2:1"],
          ["5:3", "9:9"],
        ] as TScoreArray,
        "9:7, 2:1, 5:3, 9:9",
      ],
      [[["9:7", "2:1", "2:2"]] as any, "9:7, 2:1, 2:2"],
    ])("should format %j to %s", (score, expected) => {
      expect(formatter.formatScore(score)).toStrictEqual(expected);
    });
  });
});
