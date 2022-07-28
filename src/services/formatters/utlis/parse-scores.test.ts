import { parseScores } from "./parse-scores";

describe("parseScores", () => {
  test.each([
    ["3:0", ["3:0"]],
    ["3:0,25:23,25:19,25:21", ["3:0", "25:23", "25:19", "25:21"]],
  ])("should parse %s to %p", (score, expected) => {
    expect(parseScores(score)).toStrictEqual(expected);
  });

  test.each([undefined, null, [], {}, 0, 1, true, false])(
    "should throw an exception when the argument is %p",
    (score) => {
      expect(() => parseScores(score as any)).toThrow("Incorrect scores value");
    }
  );
});
