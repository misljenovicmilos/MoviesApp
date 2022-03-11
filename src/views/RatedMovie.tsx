import { Header } from "components";
import { MovieRated } from "modules/movie-rated";
import React from "react";
import { Helmet } from "react-helmet";

const RatedMovie: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Rated movies</title>
      </Helmet>
      <div className="flex justify-content-center wrapper">
        <main className="main">
          <Header />
          <MovieRated />
        </main>
      </div>
    </>
  );
};
export default RatedMovie;
