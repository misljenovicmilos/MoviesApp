import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import {
  StarsActionTypes,
  setVote,
  AccountState,
  handleMovieRating,
} from "modules/stars";

export const useStar = () => {
  const dispatch = useDispatch();
  const [cookie] = useCookies();

  const handleError = (message: string) => {
    dispatch({ type: StarsActionTypes.Error, message });
  };
  const handleSetStars = () => {
    dispatch({ type: StarsActionTypes.Success });
  };
  const setData = (id: string, rate: number) => {
    dispatch({ type: StarsActionTypes.Request });
    setVote(id, rate, cookie.sid, handleSetStars, handleError);
  };
  const handleData = (data: AccountState) => {
    dispatch({ type: StarsActionTypes.GetRated, payload: data });
  };

  const getRating = (id: string) => {
    handleMovieRating(id, cookie.sid, handleData, handleError);
  };

  return { setData, getRating };
};
