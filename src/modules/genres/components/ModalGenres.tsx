import React from "react";
import { GenresList } from "modules/genres";

interface Props {
  handleClickModal: VoidFunction;
  isModal: boolean;
}

export const ModalGenres: React.FC<Props> = ({ handleClickModal, isModal }) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const { id } = event.target as any;
    if (id === "modal") handleClickModal();
  };
  return (
    <>
      {isModal && (
        <div
          className="flex justify-content-center"
          id="modal"
          onClick={handleClick}
        >
          <div className="modal__content">
            <h2 className="modal__content--header">Movie Roulette</h2>
            <p className="modal__content--select">Select genre:</p>
            <GenresList />
            <div onClick={handleClickModal} className="close">
              <div className="bar1"></div>
              <div className="bar2"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
