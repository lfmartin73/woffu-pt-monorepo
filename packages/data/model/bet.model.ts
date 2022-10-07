export default class Bet {
  id?: number | null = null;
  horse: string = "";
  betAmount: number = 0;
  jockey: string = "";
  gambler: string = "";
  raceDate: Date = new Date();

  constructor(initializer?: any) {
    if (!initializer) return;

    if (initializer.id) this.id = initializer.id;
    if (initializer.horse) this.horse = initializer.horse;
    if (initializer.betAmount) this.betAmount = initializer.betAmount;
    if (initializer.jockey) this.jockey = initializer.jockey;
    if (initializer.gambler) this.gambler = initializer.gambler;
    if (initializer.raceDate) this.raceDate = initializer.raceDate;

    if (initializer.bet_amount) this.betAmount = initializer.bet_amount;
    if (initializer.race_date) this.raceDate = initializer.race_date;
  }

  /**
   * Convertir a los campos que espera la api
   * @param bet 
   * @returns 
   */
  getData(bet: Bet) {
    bet.betAmount = Number(bet.betAmount);
    let data = JSON.stringify(bet);
    data = data.replace("betAmount", "bet_amount");
    data = data.replace("raceDate", "race_date");
    
    return data;
  }

}
