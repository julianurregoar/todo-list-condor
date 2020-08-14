import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Tasks, Signup, Login, Team } from './views';
import { Navbar } from './components';
import { UserContext } from './context/UserContext';

const Routes = () => {
  const { user, getCurrentUser } = useContext(UserContext);

  useEffect(() => {
    if (!user) getCurrentUser();
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/signup" render={(props) => <Signup {...props} />} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/tasks" render={(props) => <Tasks {...props} />} />
        <Route path="/team" render={(props) => <Team {...props} />} />
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
