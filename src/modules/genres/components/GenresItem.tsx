import { Input } from "components/Input";
import { Genres } from "modules/movie-details";
import React from "react";

interface Props {
  props: Genres;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const GenresItem = ({ props, handleChange }: Props) => {
  return (
    <>
      <div className="genres__input">
        <Input
          labelStyle="genres__input--label"
          className="genres__input--radio"
          type="radio"
          name="radio"
          id={props.name}
          value={props.id}
          onChange={handleChange}
        >
          {props.name}
        </Input>
      </div>
    </>
  );
};
