import { RootState } from "modules/redux-store";
const getState = (state: RootState) => state.sorting;
export const sortingSelector = {
  getState,
};
