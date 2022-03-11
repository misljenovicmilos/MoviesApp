import { AccountState } from "../models";
import { getVote, setStarsVote } from "./apiStars";

export const setVote = (
  id: string,
  rate: number,
  sid: string,
  handleSetStars: VoidFunction,
  handleError: (message: string) => void
) => {
  setStarsVote(id, sid, rate)
    .then(handleSetStars)
    .catch((res) => handleError(res.status_message));
};

export const handleMovieRating = (
  id: string,
  sid: string,
  handleData: (data: AccountState) => void,
  handleError: (message: string) => void
) => {
  getVote(id, sid)
    .then((res) => handleData(res))
    .catch((res) => handleError(res.status_message));
};
