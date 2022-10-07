import SupaBaseApi from "./supabase.api";
import Bet from "../../model/bet.model";

export default class BetApi {

  url = '/bet';
  //TODO process.env.API_BET_URL!;

  constructor() {}

  get: any = () => {
    return SupaBaseApi.get<Array<Bet>>(this.url);
  };
  
  getById: any = (id: number) => {
    return SupaBaseApi.get<Bet>(`${this.url}?id=eq.${id}`);
  };
  
  post: any = (bet: any) => {
    delete bet['id'];
    return SupaBaseApi.post<Bet>(this.url, bet);
  };
  
  put: any = (id: number, bet: Bet) => {
    return SupaBaseApi.put<any>(`${this.url}?id=eq.${id}`, bet);
  };
  
  deleteById: any = (id: number) => {
    return SupaBaseApi.delete<any>(`${this.url}?id=eq.${id}`);
  };

}