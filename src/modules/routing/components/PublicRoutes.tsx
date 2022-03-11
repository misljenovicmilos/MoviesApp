import React from "react";

type Props = { component: React.FC };
export const PublicRoute: React.FC<Props> = ({ component: Component }) => {
  return <Component />;
};
