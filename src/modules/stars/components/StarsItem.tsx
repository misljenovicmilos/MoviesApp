import React from "react";
import starVote from "assets/images/starVote.png";
import starNoVote from "assets/images/starNoVote.png";
import { Label } from "components/Label";
import { StarsType } from "modules/stars";
interface Props {
  props: StarsType;
  handleFullStar: (value: number) => void;
  handleHalfStar: (value: number) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hoverFullStar: number;
  hoverHalfStar: number;
  index: number;
}

export const StarsItem: React.FC<Props> = ({
  index,
  props,
  handleChange,
  handleFullStar,
  handleHalfStar,
  hoverFullStar,
  hoverHalfStar,
}) => {
  return (
    <div key={index} className="justify-content-center star">
      <img
        onMouseEnter={() => {
          if (hoverHalfStar >= hoverFullStar) {
            handleHalfStar(index + 1);
            handleFullStar(props.halfStar);
          }
        }}
        onTouchStart={() => {
          if (hoverHalfStar >= hoverFullStar) {
            handleHalfStar(index + 1);
            handleFullStar(props.halfStar);
          }
        }}
        onMouseMove={() => {
          if (hoverHalfStar >= hoverFullStar) {
            handleHalfStar(index + 1);
            handleFullStar(props.halfStar);
          }
        }}
        className={hoverHalfStar - 1 <= index ? "star__no-vote" : "hidden"}
        src={starNoVote}
        alt="star"
      />
      <Label
        onMouseEnter={() => {
          if (hoverHalfStar >= hoverFullStar) {
            handleFullStar(index);
            handleHalfStar(index + 1);
          } else handleFullStar(index);
        }}
        onMouseLeave={() => {
          handleHalfStar(props.halfStar);
        }}
        htmlFor={"star " + props.halfStar}
        className={
          hoverHalfStar > index ? "star__vote star__vote--half" : "hidden"
        }
      >
        <input
          type="checkbox"
          id={"star " + props.halfStar}
          className="star__input"
          onChange={handleChange}
          value={props.halfStar}
        />
        <img src={starVote} alt="star" />
      </Label>
      <Label
        htmlFor={"star " + props.fullStar}
        onMouseEnter={() => {
          if (hoverHalfStar >= hoverFullStar) handleFullStar(index);
          handleFullStar(props.fullStar);
          handleHalfStar(index + 1);
        }}
        onMouseLeave={() => {
          handleHalfStar(props.halfStar);
        }}
        className={
          hoverFullStar > index ? "star__vote star__vote--full" : "hidden"
        }
      >
        <input
          type="checkbox"
          id={"star " + props.fullStar}
          className="star__input"
          onChange={handleChange}
          value={props.fullStar}
        />
        <img src={starVote} alt="star" />
      </Label>
    </div>
  );
};
