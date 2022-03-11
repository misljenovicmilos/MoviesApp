import { Button } from "components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { moviesSelector, useMovie } from "modules/movie-list";
export const LoadMore: React.FC = () => {
  const { loadMore } = useMovie();
  const { page } = useSelector(moviesSelector.getState);
  const [pages, setPages] = useState(page);

  const handleClick = () => {
    setPages(pages + 1);
  };
  useEffect(() => {
    if (page === pages) return;
    loadMore(pages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages]);

  return (
    <Button className="btn btn--primary btn--load" onClick={handleClick}>
      Load !
    </Button>
  );
};
