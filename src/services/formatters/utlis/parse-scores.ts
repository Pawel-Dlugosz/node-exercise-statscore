const scoreError = new Error("Incorrect scores value");

export const parseScores = (scores: string): Array<string> => {
  if (!scores || typeof scores !== "string") throw scoreError;
  const result = scores.match(/([0-9]+\:[0-9]+)/g);
  if (!result) throw scoreError;
  return result;
};
