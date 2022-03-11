import React from "react";
import { PaginationItem } from "modules/movie-rated";

interface Props {
  totalPages: number;
  handleChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
  page: number;
}
export const Pagination: React.FC<Props> = ({
  totalPages,
  handleChange,
  page,
}) => {
  const pages = Array(totalPages).fill(0);

  return (
    <nav className="pagination flex justify-content-center">
      <ul className="flex pagination-items">
        {pages.map((_, index) => (
          <PaginationItem
            key={index}
            handleChange={handleChange}
            index={index}
            page={page}
          />
        ))}
      </ul>
    </nav>
  );
};
