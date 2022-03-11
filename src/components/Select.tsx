import React from "react";
interface Props {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

export const Select = ({ handleChange, children }: Props) => {
  return <select onChange={handleChange}>{children}</select>;
};
