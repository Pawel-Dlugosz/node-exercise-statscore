import { IScoreFormatter } from "../../interfaces/score-formatter.interface";
import { IdentityFormatter } from "./identity-formatter";

describe("IdentityFormatter", () => {
  describe("formatScore", () => {
    let formatter: IScoreFormatter<string>;

    beforeAll(() => {
      formatter = new IdentityFormatter();
    });

    test.each(["0:0", "1:2", "999:999"])("should return %s", (score) => {
      expect(formatter.formatScore(score)).toBe(score);
    });
  });
});
