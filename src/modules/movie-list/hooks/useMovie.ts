import { GenresActionTypes } from "modules/genres";
import { useDispatch, useSelector } from "react-redux";
import {
  Movies,
  MoviesActionTypes,
  moviesSelector,
  moviesList,
} from "modules/movie-list";

export const useMovie = () => {
  const dispatch = useDispatch();
  const handleData = (data: Movies) => {
    dispatch({ type: MoviesActionTypes.Success, payload: data });
  };
  const { page } = useSelector(moviesSelector.getState);
  const handleError = (message: string) => {
    dispatch({ type: MoviesActionTypes.Error, payload: message });
  };
  const handleMoviesList = () => {
    dispatch({ type: MoviesActionTypes.Request });
    moviesList(page, handleData, handleError);
  };
  const getSearchGenres = (result: string) => {
    dispatch({ type: GenresActionTypes.Error, payload: result });
  };
  const loadMore = (page: number) => {
    dispatch({ type: MoviesActionTypes.Page, payload: page });
  };
  return { handleMoviesList, getSearchGenres, loadMore };
};
