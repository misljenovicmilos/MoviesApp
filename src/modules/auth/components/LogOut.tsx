import { Button } from "components";
import React from "react";
import { useAuth } from "modules/auth";

export const LogOut: React.FC = () => {
  const { handleLogOut } = useAuth();
  return (
    <Button className="btn btn--logout" onClick={handleLogOut}>
      LogOut
    </Button>
  );
};
