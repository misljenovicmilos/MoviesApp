import { Card } from "components/Card";
import React from "react";
import { useNavigate } from "react-router";
import { MoviesDetailsForRated } from "modules/movie-rated";

interface Props {
  props: MoviesDetailsForRated;
}

export const RatedItem: React.FC<Props> = ({ props }) => {
  const history = useNavigate();

  const handleClick = () => history(`/movie/${props.id}`);
  return (
    <>
      <Card
        key={props.id}
        clicked={handleClick}
        stylee="flex justify-content-center card-rated card-rated__item car-rated__column"
      >
        <div className="rated__item">
          <h2 className="rated__item--header">{props.title}</h2>
          <img
            src={"https://image.tmdb.org/t/p/w200/" + props.poster_path}
            alt=""
            className="rated__item--img"
          />
        </div>
        <div className="rated__item">
          <p className="rated__item--value">
            Your rate <span>{props.rating}</span>/<span>10</span>
          </p>
        </div>
      </Card>
    </>
  );
};
