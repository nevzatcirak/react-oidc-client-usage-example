import * as React from "react";

import AuthContent from "./AuthContent";
import Buttons from "./Buttons";
import { useOidcAuthentication } from "../openid";

export default function AppContent() {
  const { oidcUser, logout, renewToken } = useOidcAuthentication();

  const getUser = () => {
    return oidcUser;
  };

  return (
    <>
      <Buttons
        logout={logout}
        renewToken={renewToken}
        getUser={getUser}
      />
      <AuthContent user={oidcUser} />
    </>
  );
}
