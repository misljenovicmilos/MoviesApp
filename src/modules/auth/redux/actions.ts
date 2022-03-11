import { UserData, AuthActionTypes } from "modules/auth";

export type AuthActions =
  | { type: typeof AuthActionTypes.Success; payload: UserData }
  | { type: typeof AuthActionTypes.Error; payload: string }
  | { type: typeof AuthActionTypes.Request }
  | { type: typeof AuthActionTypes.Clear };
