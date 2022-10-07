import Bet from "../model/bet.model";

export default interface BetDTO {
  bet?: Bet;
  error: string;
}
