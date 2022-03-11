import { Params } from "react-router-dom";

export type StarsState = {
  isRatedSet: boolean;
  accountStates: AccountState;
  error?: string;
};
export type StarsType = {
  halfStar: number;
  fullStar: number;
};
export type AccountState = {
  id: number;
  favorite: boolean;
  rated: RatedMovie;
  watchlist: boolean;
};
export type RatedMovie = {
  value: number;
};
export interface QueryParamTypes extends Params {
  id: string;
}
