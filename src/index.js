import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Menu } from 'components/common';
import Root from 'components/root';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Menu />
      <Root />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
