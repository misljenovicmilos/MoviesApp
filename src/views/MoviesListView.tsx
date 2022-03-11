import React from "react";
import { MovieList, LoadMore } from "modules/movie-list";
import { Genres } from "modules/genres";
import { Header } from "components";
import { Helmet } from "react-helmet";

const MoviesListView: React.FC = () => {
  return (
    <div className="flex justify-content-center wrapper">
      <Helmet>
        <title>The best movies</title>
      </Helmet>
      <main className="main">
        <Header />
        <section className="grid section--movieList">
          <MovieList />
        </section>
        <div className="flex justify-content-center ">
          <LoadMore />
        </div>
        <section className="section--modalBtn">
          <Genres />
        </section>
      </main>
    </div>
  );
};
export default MoviesListView;
