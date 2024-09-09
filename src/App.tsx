import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from './components/loginButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {process.env.REACT_APP_AUTH0_DOMAIN}{process.env.REACT_APP_AUTH0_CLIENT_ID}
        <LoginButton />
      </header>
    </div>
  );
}

export default App;
