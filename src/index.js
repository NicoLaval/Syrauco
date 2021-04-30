import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Menu } from 'components/common';
import Root from 'components/root';
import 'bootstrap/dist/css/bootstrap.css';
import '@inseefr/wilco/dist/index.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Menu />
      <div className="container">
        <Root />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
