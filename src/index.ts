import { EventParserService } from "./services/event-parser.service";
import { eventParserConfig } from "./config/event-parser.config";
import { rawMatchesData } from "./mocks/matches";

// The task required the use of 'any' due to non-integral data
const main = () => {
  const parser = new EventParserService(eventParserConfig);
  const parsedResult = (rawMatchesData as any)
    .map((match: any) => {
      try {
        return {
          name: parser.makeEventName(match),
          score: parser.formatScore(match),
        };
      } catch (error) {
        console.error(error);
        return null;
      }
    })
    .filter((res: any) => Boolean(res));
  console.log(JSON.stringify(parsedResult, null, 2));
};

main();
