import { authSelector } from "modules/auth";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { MoviesDetailsForRated, getRating } from "modules/movie-rated";
import { sortingSelector, SortingTypes } from "modules/sorting";
import { useDispatch } from "react-redux";
export const useRated = () => {
  const [response, setResponse] = useState<MoviesDetailsForRated[]>();
  const [error, setError] = useState<Error>();
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(1);
  const [cookie] = useCookies(["sid"]);
  const { authData } = useSelector(authSelector.getState);
  const { order } = useSelector(sortingSelector.getState);
  const dispatch = useDispatch();
  const handleData = (page: number) => {
    getRating(authData.id, cookie.sid, page, order).then(async (res) => {
      if (res.status >= 200 && res.status <= 299) {
        const json = await res.json();
        setTotalResults(json.total_results);
        setIsLoading(false);
        setTotalPages(json.total_pages);
        setResponse(json.results);
      } else {
        const json: Error = await res.json();
        setIsLoading(false);

        setError(json);
      }
    });
  };
  const sorting = (sortBy: string) => {
    dispatch({ type: SortingTypes.Sorting, payload: sortBy });
  };

  return {
    handleData,
    response,
    error,
    isLoading,
    totalPages,
    totalResults,
    sorting,
  };
};
