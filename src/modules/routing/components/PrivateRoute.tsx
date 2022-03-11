import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, RouteProps } from "react-router";
import { RoutesTypes } from "../models";

type Props = { component: React.FC } & RouteProps;

export const PrivateRoute: React.FC<Props> = ({ component: Component }) => {
  const [cookie] = useCookies(["sid"]);
  if (typeof cookie.sid === "string") return <Component />;
  return <Navigate to={RoutesTypes.MovieAPI} />;
};
