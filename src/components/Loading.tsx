import React from "react";
import spin from "assets/images/spin.svg";
export const Loading: React.FC = () => {
  return (
    <div className="flex justify-content-center spin">
      <img src={spin} className="spin__load" alt="spin" />
    </div>
  );
};
