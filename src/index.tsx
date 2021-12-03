import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from "react-router-dom";
import {ComposedAuthProvider, WebStorageStateStore} from './openid';
// import { ComposedAuthProvider, WebStorageStateStore } from '@infra/react-oidc-client';

import 'bootstrap/dist/css/bootstrap.min.css';

export const webStorageStateStore = new WebStorageStateStore({store: window.localStorage});

const rootPath = "http://localhost:3001";

export const configuration = {
    client_id: "auth-test1",
    redirect_uri: rootPath + "/authentication-callback",
    response_type: "code",
    post_logout_redirect_uri: rootPath,
    scope: "openid",
    authority: "https://tbgth-local/auth",
    silent_redirect_uri: rootPath + "/authentication-silent_callback",
    accessTokenExpiringNotificationTime: 5,
    automaticSilentRenew: true,
    userStore: webStorageStateStore
};

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ComposedAuthProvider
                configuration={configuration}
                isActive={true}
            >
                <App/>
            </ComposedAuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
