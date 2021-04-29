import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'components/home';
import { Menu } from 'components/common';
import Visu from 'components/visualization';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/visu/:id">
          <Visu />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
