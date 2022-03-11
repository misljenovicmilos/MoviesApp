import { TmdbSession } from "modules/auth";
import React from "react";

interface Props {
  handleClick: VoidFunction;
  isModal: boolean;
}

export const StarsModal: React.FC<Props> = ({ handleClick, isModal }) => {
  const handleClickOut = (event: React.MouseEvent<HTMLElement>) => {
    const { id } = event.target as any;
    if (id === "modal") handleClick();
  };
  return (
    <>
      {isModal && (
        <div
          className="flex justify-content-center"
          id="modal"
          onClick={handleClickOut}
        >
          <div className="modal__content">
            <div onClick={handleClick} className="close">
              <div className="bar1"></div>
              <div className="bar2"></div>
            </div>
            <p className="modal__content--star-sign">
              If you want to rate this movie, please
              {""} <TmdbSession />
            </p>
          </div>
        </div>
      )}
    </>
  );
};
