import React, { useEffect, useState } from "react";
import { useRated, Pagination, RatedItem } from "modules/movie-rated";
import { Loading } from "components/Loading";
import { Sorting, sortingSelector } from "modules/sorting";
import { useSelector } from "react-redux";

export const MovieRated: React.FC = () => {
  const [page, setPage] = useState(1);

  const {
    handleData,
    response,
    error,
    totalPages,
    totalResults,
    isLoading,
    sorting,
  } = useRated();
  const { order } = useSelector(sortingSelector.getState);
  useEffect(() => {
    handleData(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, order]);
  useEffect(() => {
    if (error) return;
  }, [error]);

  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPage(parseInt(event.currentTarget.value));
  };
  const onSorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!["asc", "desc"].includes(event.target.value)) return;
    sorting(event.target.value);
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : totalResults > 0 ? (
        <>
          <Sorting handleChangeSorting={onSorting} />
          {response?.map((item, index) => (
            <RatedItem key={index} props={item} />
          ))}
          <Pagination
            totalPages={totalPages}
            handleChange={handleChange}
            page={page}
          />
        </>
      ) : (
        <p>"Your list is empty"</p>
      )}
    </>
  );
};
