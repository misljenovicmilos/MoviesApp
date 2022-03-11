import { AuthState, AuthActions, AuthActionTypes } from "modules/auth";

const INITIAL_STATE: AuthState = {
  isLoading: false,
  authData: {
    id: 0,
    iso_3166_1: "",
    iso_639_1: "",
    username: "",
    include_adult: false,
    name: "",
  },
  error: undefined,
};
export const authReducer = (
  state = INITIAL_STATE,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.Request:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    case AuthActionTypes.Success:
      return {
        ...state,
        authData: action.payload,
        isLoading: false,
      };
    case AuthActionTypes.Error:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case AuthActionTypes.Clear:
      return INITIAL_STATE;
    default:
      return state;
  }
};
