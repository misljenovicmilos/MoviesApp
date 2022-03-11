import { RootState } from "modules/redux-store";
const getState = (state: RootState) => state.genres;
export const genresSelector = {
  getState,
};
