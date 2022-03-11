import { Button } from "components";
import { RoutesTypes } from "modules/routing";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { genresSelector, useGenres, GenresItem } from "modules/genres";

export const GenresList = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [check, setCheck] = useState(false);
  const { selectedGenre, randomSelectedMovie } = useGenres();
  const { genresData } = useSelector(genresSelector.getState);
  const history = useNavigate();
  const onChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (!value) {
      setIsSelected(false);
      setCheck(true);
      return;
    }
    setIsSelected(true);
    setCheck(false);
    selectedGenre(parseInt(value));
  };
  const handleClick = () => {
    if (!isSelected) {
      setCheck(true);
      return;
    }
    if (randomSelectedMovie() === 0) {
      history(RoutesTypes.MoviesIsNotFound);
      return;
    }
    history(`/movie/${randomSelectedMovie()}`);
  };

  return (
    <>
      {genresData.map((item, index) => (
        <GenresItem key={index} props={item} handleChange={onChecked} />
      ))}
      {check ? <p className="error">Please select a genre</p> : ""}
      <Button className="btn btn--secondary" onClick={handleClick}>
        Roll
      </Button>
    </>
  );
};
