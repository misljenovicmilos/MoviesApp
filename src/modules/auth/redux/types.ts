enum AuthActions {
  Success = "TMDB_SESSION/SUCCESS",
  Request = "TMDB_SESSION/REQUEST",
  Error = "TMDB_SESSION/ERROR",
  Clear = "TMDB_SESSION/CLEAR",
}
export const AuthActionTypes = {
  ...AuthActions,
};
