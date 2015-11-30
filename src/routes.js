// React
/*eslint-disable */
import React from 'react';
/*eslint-enable */
import { Route, IndexRoute } from 'react-router';
// import Main from './layouts/Main';
// import Application from './layouts/Application';
import Guardian from './misc/Guardian';

import {
  BareLayout,
  ApplicationLayout
} from './layouts';

import {
  Dashboard,
  BudgetDomains,
  BudgetCategories,
  SignIn
} from './containers';

export default (
  <Route component={BareLayout}>
    <Route component={Guardian}>
      <Route path='/' component={ApplicationLayout}>
        <IndexRoute component={Dashboard} />
        <Route path="budget_domains" component={BudgetDomains} />
        <Route path="budget_domains/:budgetDomainId/categories" component={BudgetCategories} />
      </Route>
    </Route>
    <Route path="/sign_in" component={SignIn} />
  </Route>
);
