import React from "react";

interface Props {
  index: number;
  page: number;
  handleChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const PaginationItem: React.FC<Props> = ({
  index,
  handleChange,
  page,
}) => {
  return (
    <>
      <li key={index} className="pagination-item">
        <button
          onClick={handleChange}
          id={page === index + 1 ? "active" : ""}
          className="btn pagination-link"
          value={index + 1}
        >
          {index + 1}
        </button>
      </li>
    </>
  );
};
