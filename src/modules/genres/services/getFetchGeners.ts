import { GenresType, getGenres } from "modules/genres";
export const getFetchGenres = (
  handleData: (data: GenresType) => void,
  handleError: (message: string) => void
) => {
  getGenres()
    .then((res) => handleData(res.genres))
    .catch((error) => handleError(error.status_message));
};
