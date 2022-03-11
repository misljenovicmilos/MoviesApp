export const getMoviesList = async (page: number) => {
  return await fetch(
    process.env.REACT_APP_API_URL +
      "/movie/popular?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&language=en-US&page=" +
      page,
    {
      method: "GET",
    }
  ).then((res) => res.json());
};
