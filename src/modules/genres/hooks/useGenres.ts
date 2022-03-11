import { moviesSelector } from "modules/movie-list";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GenresActionTypes, GenresType, getFetchGenres } from "modules/genres";

export const useGenres = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<number>();
  const { movieData } = useSelector(moviesSelector.getState);

  const selectedGenre = (genre_id: number) => {
    setValue(genre_id);
  };
  const handleData = (genres: GenresType) => {
    dispatch({ type: GenresActionTypes.Success, payload: genres });
  };
  const handleError = (message: string) => {
    dispatch({ type: GenresActionTypes.Error, payload: message });
  };
  const handleGenres = () => {
    dispatch({ type: GenresActionTypes.Request });
    getFetchGenres(handleData, handleError);
  };
  const randomSelectedMovie = () => {
    const genresBySelected = [0];
    // eslint-disable-next-line array-callback-return
    movieData.find(({ id, genre_ids }) => {
      genre_ids.forEach((item) => {
        if (item === value) genresBySelected.push(id);
      });
    });
    return genresBySelected[
      Math.floor(Math.random() * genresBySelected.length)
    ];
  };
  return { handleGenres, selectedGenre, randomSelectedMovie };
};
