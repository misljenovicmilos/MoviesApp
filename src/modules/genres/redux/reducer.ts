import { GenersActions, GenresActionTypes, GenresState } from "modules/genres";

const INITIAL_STATE: GenresState = {
  isLoading: false,
  genresData: [],
  error: undefined,
};
export const genresReducer = (
  state = INITIAL_STATE,
  action: GenersActions
): GenresState => {
  switch (action.type) {
    case GenresActionTypes.Request:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    case GenresActionTypes.Success:
      return {
        ...state,
        genresData: action.payload,
        isLoading: false,
      };
    case GenresActionTypes.Error:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
