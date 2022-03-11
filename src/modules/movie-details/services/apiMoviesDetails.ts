export const getMoviesDetails = async (id: string) => {
  return await fetch(
    process.env.REACT_APP_API_URL +
      "/movie/" +
      id +
      "?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&language=en-US",
    {
      method: "GET",
    }
  );
};
