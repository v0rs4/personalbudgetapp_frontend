// React
import React from 'react';
import { Route } from 'react-router';
// Layouts
import Main from './layouts/Main';
import Guardian from './misc/Guardian';
// Component/Redux Containers
import BudgetDomains from './containers/BudgetDomains';
import BudgetCategories from './containers/BudgetCategories';
import SignIn from './containers/SignIn'

export default (
  <Route component={Main}>
    <Route component={Guardian}>
      <Route path="/budget_domains" component={BudgetDomains} />
      <Route path="/budget_domains/:budgetDomainId/categories" component={BudgetCategories} />
    </Route>
    <Route path="/sign_in" component={SignIn} />
  </Route>
);
