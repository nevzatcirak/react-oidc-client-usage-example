import * as React from "react";
import axios from 'axios';

import AuthContent from "./AuthContent";
import Buttons from "./Buttons";
// import { useAuthentication } from "@nevzatcirak/react-oidc-client";
import { useAuthentication } from "../openid";


export default function AppContent() {
  const { oidcUser, logout, renewToken } = useAuthentication();

  const getUser = () => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + oidcUser?.access_token;
    axios.get("http://whoami.cirak.localhost");
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
