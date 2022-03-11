import { StarsState, StarsActions, StarsActionTypes } from "modules/stars";

const INITIAL_STATE: StarsState = {
  isRatedSet: false,
  accountStates: {
    id: 0,
    favorite: false,
    rated: { value: 0 },
    watchlist: false,
  },
  error: undefined,
};
export const starsReducer = (
  state = INITIAL_STATE,
  action: StarsActions
): StarsState => {
  switch (action.type) {
    case StarsActionTypes.Request:
      return {
        ...state,
        isRatedSet: false,
        error: undefined,
      };
    case StarsActionTypes.Success:
      return {
        ...state,
        isRatedSet: true,
        error: undefined,
      };
    case StarsActionTypes.Error:
      return {
        ...state,
        error: action.payload,
        isRatedSet: false,
      };
    case StarsActionTypes.GetRated:
      return {
        ...state,
        accountStates: action.payload,
      };
    default:
      return state;
  }
};
