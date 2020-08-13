import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Tasks, Sign } from './views';
import { Navbar } from './components';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          path="/signup"
          render={(props) => <Sign {...props} title="Signup" />}
        />
        <Route
          path="/login"
          render={(props) => <Sign {...props} title="Login" />}
        />
        <Route path="/tasks" render={(props) => <Tasks {...props} />} />
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
