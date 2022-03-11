import { Button } from "components";
import React from "react";
import { useAuth } from "modules/auth";

export const TmdbSession: React.FC = () => {
  const { handleRequestToken } = useAuth();
  return (
    <Button className="btn btn--account" onClick={handleRequestToken}>
      Sign In
    </Button>
  );
};
