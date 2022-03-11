import { AccountState, StarsActionTypes } from "modules/stars";

export type StarsActions =
  | { type: typeof StarsActionTypes.Success }
  | { type: typeof StarsActionTypes.Request }
  | { type: typeof StarsActionTypes.Error; payload: string }
  | { type: typeof StarsActionTypes.GetRated; payload: AccountState };
