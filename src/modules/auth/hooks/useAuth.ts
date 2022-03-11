import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import {
  UserData,
  sessionId,
  requestToken,
  logOut,
  signInWithTmdbAccount,
  AuthActionTypes,
} from "modules/auth";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [cookie, setCookie, removeCookie] = useCookies();
  const handleError = (message: string) => {
    dispatch({ type: AuthActionTypes.Error, payload: message });
  };
  const handleRequestToken = () => {
    requestToken(handleError);
  };
  const setSessionId = (sessionId: string) => {
    setCookie("sid", sessionId, { maxAge: 60 * 60 * 30 });
  };
  const handleSessionId = (token: string) => {
    sessionId(token, setSessionId, handleError);
  };
  const handleUserClear = () => {
    dispatch({ type: AuthActionTypes.Clear });
    removeCookie("sid", { path: "/", maxAge: 0 });
  };
  const handleLogOut = () => {
    dispatch({ type: AuthActionTypes.Request });
    logOut(cookie.sid, handleUserClear, handleError);
  };
  const handleUserData = (data: UserData) => {
    dispatch({ type: AuthActionTypes.Success, payload: data });
  };
  const handleLogIn = () => {
    dispatch({ type: AuthActionTypes.Request });
    signInWithTmdbAccount(cookie.sid, handleUserData, handleError);
  };

  return {
    handleRequestToken,
    handleLogOut,
    handleLogIn,
    handleSessionId,
  };
};
