import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/';

import { Home, Login, Product, Register, Cart } from '../containers';
import PrivateRoute from './private-route';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Product} path="/produtos" />
        <PrivateRoute component={Cart} path="/carrinho" />
      </Switch>
    </Router>
  );
}

export default Routes;
