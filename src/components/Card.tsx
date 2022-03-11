import React from "react";

interface Props {
  clicked: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
  stylee: string;
}

export const Card: React.FC<Props> = ({ clicked, children, stylee }) => {
  return (
    <div className={stylee} onClick={clicked}>
      {children}
    </div>
  );
};
