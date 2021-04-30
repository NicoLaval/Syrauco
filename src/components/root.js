import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/home';
import Visu from 'components/visualization';
import Create from 'components/create';

const Root = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/visu/:id">
      <Visu />
    </Route>
    <Route exact path="/create">
      <Create />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Root;
