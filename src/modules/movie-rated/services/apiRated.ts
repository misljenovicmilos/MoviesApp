import { Order } from "modules/sorting";

export const getRating = async (
  accountId: number,
  sessionId: string,
  pages: number,
  order: Order
) => {
  return await fetch(
    process.env.REACT_APP_API_URL +
      "/account/" +
      accountId +
      "/rated/movies?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&language=en-US&session_id=" +
      sessionId +
      "&sort_by=created_at." +
      order +
      "&page=" +
      pages
  );
};
