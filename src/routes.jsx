import React from 'react'
import { Route } from 'react-router'
import ApplicationLayout from './layouts/Application'
import BudgetDomainsContainer from './containers/BudgetDomains';
import SignInContainer from './containers/SignIn'

export default (
  <Route component={ApplicationLayout}>
    <Route path="/" component={BudgetDomainsContainer} />
    <Route path="/sign_in" component={SignInContainer} />
  </Route>
);
