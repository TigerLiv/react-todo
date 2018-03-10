import React from 'react';
import { Router, Route } from 'dva/router';
import App from "./containers/App.js";

export default ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  );
}