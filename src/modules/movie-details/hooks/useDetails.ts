import { useState } from "react";
import { MovieDetails, getMoviesDetails } from "modules/movie-details";

export const useDetails = () => {
  const [response, setResponse] = useState<MovieDetails>();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);

  const handleData = (id: string) => {
    getMoviesDetails(id).then(async (res) => {
      if (res.status >= 200 && res.status <= 299) {
        const json: MovieDetails = await res.json();
        setIsLoading(false);
        setResponse(json);
      } else {
        const json: Error = await res.json();
        setIsLoading(false);
        setError(json);
      }
    });
  };
  return { handleData, response, error, isLoading };
};
