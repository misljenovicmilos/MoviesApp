import {
  MoviesActions,
  MoviesActionTypes,
  MoviesState,
} from "modules/movie-list";

const INITIAL_STATE: MoviesState = {
  isLoading: false,
  movieData: [],
  error: undefined,
  page: 1,
};
export const moviesReducer = (
  state = INITIAL_STATE,
  action: MoviesActions
): MoviesState => {
  switch (action.type) {
    case MoviesActionTypes.Request:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    case MoviesActionTypes.Success:
      return {
        ...state,
        isLoading: false,
        movieData: state.movieData.concat(action.payload),
      };
    case MoviesActionTypes.Error:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case MoviesActionTypes.Page:
      return {
        ...state,
        page: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
