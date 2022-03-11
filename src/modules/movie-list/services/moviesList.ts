import { Movies } from "../models";
import { getMoviesList } from "./apiMoviesList";

export const moviesList = (
  page: number,
  handleData: (data: Movies) => void,
  handleError: (message: string) => void
) => {
  getMoviesList(page)
    .then((res) => handleData(res.results))
    .catch((res) => handleError(res.status_message));
};
