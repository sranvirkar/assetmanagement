import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from '../helpers/history';

import Home from './dashboard';
import Login from './login';

const AppRouter = () => (
  <Router history={createBrowserHistory}>
    <Switch>
      <Route exact path={"/"} component={Login}/>
      <Route path={"/home"} component={Home}/>
    </Switch>
  </Router>
);

export default AppRouter;
