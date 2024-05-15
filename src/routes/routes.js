import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/';

import paths from '../constants/paths';
import { Home, Login, Product, Register, Cart, Admin } from '../containers';
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
        <PrivateRoute component={Admin} path={paths.Order} isAdmin />
        <PrivateRoute component={Admin} path={paths.Product} isAdmin />
        <PrivateRoute component={Admin} path={paths.NewProduct} isAdmin />
      </Switch>
    </Router>
  );
}

export default Routes;
