import { Card } from "components/Card";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Movies } from "modules/movie-list";

interface Props {
  props: Movies;
}
type Timer = ReturnType<typeof setTimeout>;
export const MovieItem: React.FC<Props> = ({ props }) => {
  const history = useNavigate();
  const [isLoadingImg, setIsLoadingImg] = React.useState(true);
  const [tooltipData, setTooltipData] = React.useState<string>();
  let timer: Timer;
  const handleMouseEnter = () => {
    timer = setTimeout(() => {
      // eslint-disable-next-line no-useless-concat
      setTooltipData(props.title + " " + "(" + year + ")");
    }, 300);
  };
  const handleMouseLeave = () => {
    clearTimeout(timer);
  };
  const handleClick = () => history(`/movie/${props.id}`);
  const year = new Date(props.release_date).getFullYear();
  return (
    <>
      <Card key={props.id} clicked={handleClick} stylee="flex card card--light">
        <p className="card__vote">{props.vote_average.toFixed(1)}</p>
        <img
          className={!isLoadingImg ? "card__poster" : "skel__card--poster"}
          src={"https://image.tmdb.org/t/p/w300/" + props.poster_path}
          alt="img"
          onLoad={() => setIsLoadingImg(false)}
        />
        <h3
          className="card__title"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-tool-tip={tooltipData}
        >
          {props.title} <span>({year})</span>
        </h3>
        <p className="card__language">
          Language: <span>{props.original_language}</span>
        </p>
      </Card>
    </>
  );
};
