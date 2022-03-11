import React from "react";
import { useSelector } from "react-redux";
import { moviesSelector, MovieItem } from "modules/movie-list";
export const MovieList: React.FC = () => {
  const { movieData } = useSelector(moviesSelector.getState);
  return (
    <>
      {movieData.map((item, index) => (
        <MovieItem key={index} props={item} />
      ))}
    </>
  );
};
