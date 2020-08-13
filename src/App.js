import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import GlobalProvider from './context';

const history = createBrowserHistory();

const App = () => {
  return (
    <GlobalProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </GlobalProvider>
  );
};

export default App;
