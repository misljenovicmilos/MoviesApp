import {
  UserData,
  deleteSessionId,
  getRequestToken,
  getSessionId,
  getUserData,
} from "modules/auth";
export const requestToken = (handleError: (message: string) => void) => {
  getRequestToken()
    .then((item) => {
      window.location.href =
        "https://www.themoviedb.org/authenticate/" +
        item.request_token +
        "?redirect_to=" +
        process.env.REACT_APP_URL;
    })
    .catch((res) => handleError(res.status_message));
};
export const logOut = (
  sessionId: string,
  handleUserClean: VoidFunction,
  handleError: (message: string) => void
) => {
  deleteSessionId(sessionId)
    .then(handleUserClean)
    .catch((res) => handleError(res.status_message));
};
export const signInWithTmdbAccount = (
  sessionId: string,
  handleUserData: (data: UserData) => void,
  handleError: (message: string) => void
) => {
  getUserData(sessionId)
    .then((res) => handleUserData(res))
    .catch((res) => handleError(res.status_message));
};
export const sessionId = (
  token: string,
  setSessionId: (sessionId: string) => void,
  handleError: (message: string) => void
) => {
  getSessionId(token)
    .then((res) => setSessionId(res.session_id))
    .catch((res) => handleError(res.status_message));
};
