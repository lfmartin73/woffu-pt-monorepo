import BetApi from "../api/supabase/bet.supabase.api";
import Bet from "../model/bet.model";
import BetDTO from "../dto/bet.dto";
import BetsDTO from "../dto/bets.dto";

export class BetService {
  api = new BetApi();

  getAll(): Promise<BetsDTO> {
    return this.api
      .get()
      .then((response: any) => {
        const data: [] = response.data;
        const bets = data.map((item) => new Bet(item))
          .sort((a, b) => a && a.id && b && b.id ? a.id - b.id : -1);
        return { bets: bets, error: '' };
      })
      .catch((e: any) => {
        return { bets: [], error: e.message };
      });
  }

  save(bet: Bet): Promise<BetDTO> {

    const data = this.convertToData(bet);

    if (bet.id) {
      //Update, PUT
      return this.api
        .put(bet.id, data)
        .then((response: any) => {
          return { bet: new Bet(response.data[0]), error: '' };
        })
        .catch((e: any) => {
          return { bet: undefined, error: e.message };
        });
    }

    //Insert, POST
    return this.api
      .post(data)
      .then((response: any) => {
        return { bet: new Bet(response.data[0]), error: '' };
      })
      .catch((e: any) => {
        return { bet: undefined, error: e.message };
      });
  }

  delete(bet: Bet): Promise<BetDTO> {
    if (!bet.id) {
      return Promise.resolve({ bet: undefined, error: "Bet ID is missing." });
    }

    return this.api
      .deleteById(bet.id)
      .then((response: any) => {
        return { bet: new Bet(response.data[0]), error: '' };
      })
      .catch((e: any) => {
        return { bet: undefined, error: e.message };
      });
  }

  private convertToData(bet: Bet): any {

    bet.betAmount = Number(bet.betAmount);
    let data = JSON.stringify(bet);
    data = data.replace("betAmount", "bet_amount");
    data = data.replace("raceDate", "race_date");
    
    return data;
  }

}
