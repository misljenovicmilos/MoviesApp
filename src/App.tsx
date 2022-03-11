import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "modules/auth";
import { useCookies } from "react-cookie";
import { useGenres } from "modules/genres";
import { useMovie, moviesSelector } from "modules/movie-list";
import { useSelector } from "react-redux";
import { Routing } from "pages/Routing";
export const App: React.FC = () => {
  const { handleSessionId, handleLogIn } = useAuth();
  const { handleMoviesList } = useMovie();
  const { handleGenres } = useGenres();
  const { page } = useSelector(moviesSelector.getState);
  const [cookie] = useCookies();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const token = params.get("request_token");

  useEffect(() => {
    if (typeof token === "string" && !cookie.sid) {
      handleSessionId(token);
    } else if (typeof cookie.sid === "string") {
      handleLogIn();
    } else return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookie.sid]);

  useEffect(() => {
    handleGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    handleMoviesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};
