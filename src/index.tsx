import './index.css';
import reportWebVitals from './reportWebVitals';
import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider, AppState, Auth0ProviderOptions } from '@auth0/auth0-react';
import { BrowserRouter, useNavigate } from 'react-router-dom';

const Auth0ProviderWithRedirectCallback = ({
  children,
  ...props
}: PropsWithChildren<Auth0ProviderOptions>) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback
        domain={process.env.REACT_APP_AUTH0_DOMAIN||""}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID||""}
        authorizationParams={{
          audience: process.env.REACT_APP_AUDIENCE,
          scope: 'profile email read:users',
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
