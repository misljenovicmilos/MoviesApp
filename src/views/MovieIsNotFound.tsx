import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const MovieIsNotFound: React.FC = () => {
  return (
    <div className="flex justify-content-center error-page">
      <Helmet>
        <title>Not found</title>
      </Helmet>

      <div className="error-page-content">
        <h1>Sorry!</h1>
        <p>Unfortunately in your list, we can't find selected genres.</p>
        <p>
          Please, you have to load more movies or you can select other genres.
        </p>
        <Link className="btn btn--link btn--homepage" to="/">
          Go homepage
        </Link>
      </div>
    </div>
  );
};
