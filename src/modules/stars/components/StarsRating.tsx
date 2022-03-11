import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import {
  useStar,
  starsSelector,
  StarsItem,
  StarsModal,
  QueryParamTypes,
} from "modules/stars";
import { stars } from "utils";
import { useCookies } from "react-cookie";

export const StarRating: React.FC = () => {
  const [cookie] = useCookies(["sid"]);
  const id = useParams() as QueryParamTypes;
  const { setData, getRating } = useStar();
  const [isModal, setIsModal] = useState(false);
  const { isRatedSet, accountStates } = useSelector(starsSelector.getState);
  const [delay, setDelay] = useState(false);
  const [ifValueExist, setIfValueExist] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverFullStar, setHoverFullStar] = useState(0);
  const [hoverHalfStar, setHoverHalfStar] = useState(0);

  const handleFullStar = (value: number) => {
    setHoverFullStar(value);
  };
  const handleHalfStar = (value: number) => {
    setHoverHalfStar(value);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (typeof cookie.sid !== "string") {
      setIsModal(true);
      return;
    }
    setRating(parseFloat(value));
    setIfValueExist(true);
  };
  const handleClick = () => {
    setIsModal(false);
  };
  useEffect(() => {
    if (rating === 0) return;
    setData(id.id, rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);
  useEffect(() => {
    if (typeof cookie.sid === "string") {
      getRating(id.id);
    }
    if (accountStates.rated.value > 0) {
      setHoverFullStar(accountStates.rated.value - 0.5);
      setHoverHalfStar(accountStates.rated.value);
      setIfValueExist(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, accountStates.rated.value, delay]);
  useEffect(() => {
    if (rating === 0) return;

    const timer = setTimeout(() => {
      setDelay(false);
    }, 800);
    return () => {
      clearTimeout(timer);
      setDelay(true);
    };
  }, [isRatedSet, rating]);
  return (
    <>
      <div
        className="flex"
        onMouseLeave={() => {
          if (ifValueExist && accountStates.rated.value > 0) {
            setHoverFullStar(accountStates.rated.value - 0.5);
            setHoverHalfStar(accountStates.rated.value);
          } else {
            setHoverHalfStar(0);
            setHoverFullStar(0);
          }
        }}
      >
        {stars.map((item, index: number) => (
          <StarsItem
            key={index}
            props={item}
            index={index}
            handleChange={handleChange}
            handleFullStar={handleFullStar}
            handleHalfStar={handleHalfStar}
            hoverHalfStar={hoverHalfStar}
            hoverFullStar={hoverFullStar}
          />
        ))}
      </div>
      <StarsModal handleClick={handleClick} isModal={isModal} />
      {delay && isRatedSet && (
        <div className="success-vote">
          <p>The movie is successfully rated</p>
        </div>
      )}
    </>
  );
};
