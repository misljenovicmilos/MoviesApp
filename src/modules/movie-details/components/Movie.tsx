import { RoutesTypes } from "modules/routing";
import { QueryParamTypes, StarRating } from "modules/stars";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDetails } from "modules/movie-details";
import { useNavigate } from "react-router-dom";

export const Movie: React.FC = () => {
  const id = useParams() as QueryParamTypes;
  const history = useNavigate();
  const { handleData, response, error } = useDetails();
  const [isLoadingImg, setIsLoadingImg] = useState(true);

  useEffect(() => {
    handleData(id.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id.id]);
  useEffect(() => {
    if (error) return history(RoutesTypes.MoviesIsNotFound);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  if (!response) return null;
  const year = new Date(response.release_date).getFullYear();
  return (
    <>
      <div className="flex flex--direction--column">
        <div className="details__item">
          <h1 className="details__item--title">
            {response.title} <span>({year})</span>
          </h1>
        </div>
        <div className="details__item">
          <img
            className={
              !isLoadingImg ? "details__item--poster" : "skel__item--img"
            }
            src={"https://image.tmdb.org/t/p/w1280/" + response.backdrop_path}
            alt="re"
            onLoad={() => setIsLoadingImg(false)}
          />
          <p className="details__item--overview">{response.overview}</p>
        </div>
        <div className="flex justify-content-space-between column">
          <div className="details__info">
            <p className="details__item details__item--vaverage">
              Rating:{" "}
              <span className="details__info--bold">
                {response.vote_average.toFixed(1)}
              </span>
            </p>
            <p className="details__item details__item--language">
              Language:{" "}
              <span className="details__info--bold">
                {response.original_language}
              </span>
            </p>
            <p className="details__item details__item--popularity">
              Popularity:{" "}
              <span className="details__info--bold">{response.popularity}</span>
            </p>
            <p className="details__item details__item--companies">
              Production companies:{" "}
              <span className="details__info--bold">
                {response.production_companies
                  .map((item) => item.name)
                  .join(", ")}
              </span>
            </p>
          </div>
          <div className="details__item">
            <StarRating />
          </div>
        </div>
      </div>
    </>
  );
};
