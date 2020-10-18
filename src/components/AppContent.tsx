import * as React from "react";

import { ToastContainer, toast } from "react-toastify";
// import { ApiService } from '../services/ApiService';
// import { AuthService } from '../services/AuthService';

import AuthContent from "./AuthContent";
import Buttons from "./Buttons";
import { useOidcAuthentication } from "../openid";

export default function AppContent() {
  // public authService: AuthService;
  // public apiService: ApiService;
  // private shouldCancel: boolean;

  /* constructor(props: any) {
    super(props);

    // this.authService = new AuthService();
    // this.apiService = new ApiService();
    this.state = { user: {}, api: {} };
    // this.shouldCancel = false;
  } */

  /* public componentDidMount() {
    this.getUser();
  } */

  /* public callApi = () => {
    this.apiService
      .callApi('test')
      .then(data => {
        this.setState({ api: {...this.state.api, callApi: data.data } });
        toast.success('Api return successfully data, check in section - Api response');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  public callApi2 = () => {
    this.apiService
      .callApi('rest/test')
      .then(data => {
        this.setState({ api: {...this.state.api, callApi2: data.data } });
        toast.success('Api return successfully data, check in section - Api response');
      })
      .catch(error => {
        toast.error(error.message);
      });
  }; */

  /* public callApi3 = () => {
    this.apiService
      .callApi('rest/test2')
      .then(data => {
        this.setState({ api: {...this.state.api, callApi3: data.data } });
        toast.success('Api return successfully data, check in section - Api response');
      })
      .catch(error => {
        toast.error(error.message);
      });
  }; */

  /* public componentWillUnmount() {
    this.shouldCancel = true;
  } */

  const { oidcUser, logout, renewToken } = useOidcAuthentication();

  const getUser = () => {
    return oidcUser;
  };

  return (
    <>
      <ToastContainer />

      <Buttons
        logout={logout}
        renewToken={renewToken}
        getUser={getUser}
        // callApi={this.callApi}
        // callApi2={this.callApi2}
        // callApi3={this.callApi3}
      />

      <AuthContent user={oidcUser} />
    </>
  );
}
