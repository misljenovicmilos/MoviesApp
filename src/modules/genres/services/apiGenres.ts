export const getGenres = async () => {
  return await fetch(
    process.env.REACT_APP_API_URL +
      "/genre/movie/list?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&language=en-US",
    { method: "GET" }
  ).then((res) => res.json());
};
