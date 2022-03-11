import { Header } from "components";
import { Movie } from "modules/movie-details";
import { Helmet } from "react-helmet";

import React from "react";

const MovieDetail: React.FC = () => {
  return (
    <>
      <div className="flex justify-content-center wrapper">
        <Helmet>
          <title>Movie Details</title>
        </Helmet>
        <main className="main">
          <Header />
          <section className="section--movieDetail">
            <Movie />
          </section>
        </main>
      </div>
    </>
  );
};
export default MovieDetail;
