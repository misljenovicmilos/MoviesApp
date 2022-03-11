import { PublicRoute, RoutesTypes } from "modules/routing";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { MovieIsNotFound } from "views/MovieIsNotFound";
import { NotFound } from "views/404";
import { PrivateRoute } from "modules/routing/components/PrivateRoute";
import { Skeletons } from "components/Skeletons";
import { Loading } from "components/Loading";
const RatedMovie = lazy(() => import("views/RatedMovie"));
const MoviesListView = lazy(() => import("views/MoviesListView"));
const MovieDetails = lazy(() => import("views/MovieDetail"));
export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route
        path={RoutesTypes.MovieAPI}
        element={
          <Suspense fallback={<Loading />}>
            <PublicRoute component={MoviesListView} />
          </Suspense>
        }
      />
      <Route
        path={RoutesTypes.MovieDetails}
        element={
          <Suspense fallback={<Skeletons />}>
            <PublicRoute component={MovieDetails} />
          </Suspense>
        }
      />
      <Route
        path={RoutesTypes.MoviesIsNotFound}
        element={
          <Suspense fallback={<Loading />}>
            <PublicRoute component={MovieIsNotFound} />
          </Suspense>
        }
      />
      <Route path="*" element={<PublicRoute component={NotFound} />} />
      <Route
        path={RoutesTypes.RatedMovies}
        element={
          <Suspense fallback={<Loading />}>
            <PrivateRoute component={RatedMovie} />
          </Suspense>
        }
      />
    </Routes>
  );
};
