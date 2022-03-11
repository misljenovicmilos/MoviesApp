import { RootState } from "modules/redux-store";
const getState = (state: RootState) => state.movies;
export const moviesSelector = {
  getState,
};
