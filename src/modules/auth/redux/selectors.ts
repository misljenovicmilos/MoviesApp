import { RootState } from "modules/redux-store";
const getState = (state: RootState) => state.auth;
export const authSelector = {
  getState,
};
