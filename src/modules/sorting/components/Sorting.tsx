import React from "react";
import { Select } from "components/Select";

interface Props {
  handleChangeSorting: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Sorting: React.FC<Props> = ({ handleChangeSorting }) => {
  return (
    <>
      <Select handleChange={handleChangeSorting}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
    </>
  );
};
