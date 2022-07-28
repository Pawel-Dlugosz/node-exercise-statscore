import { TConfig as TEventParserConfig } from "../services/event-parser.service";
import { IdentityFormatter } from "../services/formatters/identity-formatter";
import { ArrayFormatter } from "../services/formatters/array-formatter";
import { SetsFormatter } from "../services/formatters/sets-formatter";
import { ESport } from "../interfaces/sport.enum";

// In a real life scenario, the dependencies below should be provided by DI.
const identityFormatter = new IdentityFormatter();
const setsFormatter = new SetsFormatter();
const arrayFormatter = new ArrayFormatter();

// prettier-ignore
export const eventParserConfig: TEventParserConfig = {
  [ESport.soccer]:     { separator: "-",  formatter: identityFormatter },
  [ESport.volleyball]: { separator: "-",  formatter: setsFormatter },
  [ESport.basketball]: { separator: "-",  formatter: arrayFormatter },
  [ESport.tennis]:     { separator: "vs", formatter: setsFormatter },
  [ESport.handball]:   { separator: "vs", formatter: identityFormatter },
};
