enum Routes {
  MovieAPI = "/",
  MovieDetails = "/movie/:id",
  MoviesIsNotFound = "movies/notfound",
  LogIn = "login",
  RatedMovies = "/rated",
}
export const RoutesTypes = {
  ...Routes,
};
