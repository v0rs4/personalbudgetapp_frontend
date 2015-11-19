import React from 'react'
import { Route } from 'react-router'
import {AppContainer} from './components/App'
import {BudgetDomainsContainer} from './components/BudgetDomains';
import {SignInContainer} from './components/SignIn'

export default (
  <Route path="/" component={AppContainer}>
    <Route path="/budgetDomains" component={BudgetDomainsContainer} />
    <Route path="/sign_in" component={SignInContainer} />
  </Route>
);
