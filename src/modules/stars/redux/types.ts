enum StarsActions {
  Success = "STARS/SUCCESS-SET",
  GetRated = "STARS/GET-ACCOUNT-STATE-RATED",
  Request = "STARS/REQUEST",
  Error = "STARS/ERROR",
}
export const StarsActionTypes = {
  ...StarsActions,
};
