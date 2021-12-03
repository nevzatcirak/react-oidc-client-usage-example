import * as React from "react";

import AuthContent from "./AuthContent";
import Buttons from "./Buttons";
// import { useAuthentication } from "@infra/react-oidc-client";
import { useAuthentication } from "../openid";

import axios from '../axios-config';

export default function AppContent() {
  const { oidcUser, logout, renewToken } = useAuthentication();

  const getUser = () => {
    return oidcUser;
  };

  const getTestSecureEndpoint = () => {
    axios.get("http://localhost/whiteboard/rest/publicdraws");
    return oidcUser;
  };

  return (
    <>
      <Buttons
        logout={logout}
        renewToken={renewToken}
        getUser={getUser}
        getTestSecureEndpoint={getTestSecureEndpoint}
      />
      <AuthContent user={oidcUser} />
    </>
  );
}
