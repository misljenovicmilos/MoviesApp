import React, { useState } from "react";
import shuffle from "assets/images/roullete.png";
import { ModalGenres } from "modules/genres";
import { Button } from "components";

export const Genres: React.FC = () => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
  };
  const handleClickModal = () => {
    setModal(false);
  };
  return (
    <>
      <Button className="btn btn--primary btn--shuffle" onClick={handleClick}>
        <img src={shuffle} alt="shuffle" />
      </Button>
      <ModalGenres handleClickModal={handleClickModal} isModal={modal} />
    </>
  );
};
