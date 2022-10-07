import Bet from "./bet.model";

export default interface BetsDTO {
  bets: Bet[];
  error: string;
}
