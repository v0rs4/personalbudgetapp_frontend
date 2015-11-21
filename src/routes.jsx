import React from 'react';
import { Route } from 'react-router';
import Main from './layouts/Main';
import Guardian from './layouts/Guardian';
import BudgetDomains from './containers/BudgetDomains';
import SignIn from './containers/SignIn'

export default (
  <Route component={Main}>
    <Route component={Guardian}>
      <Route path="/" component={BudgetDomains} />
    </Route>
    <Route path="/sign_in" component={SignIn} />
  </Route>
);
