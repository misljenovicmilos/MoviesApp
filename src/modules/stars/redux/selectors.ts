import { RootState } from "modules/redux-store";
const getState = (state: RootState) => state.stars;
export const starsSelector = {
  getState,
};
