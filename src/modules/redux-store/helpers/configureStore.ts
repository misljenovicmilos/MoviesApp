import { authReducer } from "modules/auth";
import { genresReducer } from "modules/genres";
import { moviesReducer } from "modules/movie-list";
import { sortingReducer } from "modules/sorting";
import { starsReducer } from "modules/stars";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const configureStore = () => {
  const rootReducer = {
    movies: moviesReducer,
    genres: genresReducer,
    auth: authReducer,
    stars: starsReducer,
    sorting: sortingReducer,
  };
  if (process.env.NODE_ENV === "development") {
    return createStore(
      combineReducers(rootReducer),
      composeWithDevTools(applyMiddleware(thunk))
    );
  } else return createStore(combineReducers(rootReducer));
};
const storeState = configureStore().getState;
export type RootState = ReturnType<typeof storeState>;
