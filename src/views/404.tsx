import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const NotFound = () => {
  return (
    <div className="flex justify-content-center error-page">
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <div className="error-page-content">
        <h1>Oops !</h1>
        <p>Sorry, this page is not available.</p>
        <Link className="btn btn--link btn--homepage" to="/">
          Go homepage
        </Link>
      </div>
    </div>
  );
};
