// React
/*eslint-disable */
import React from 'react';
/*eslint-enable */
import { Route, IndexRoute } from 'react-router';
// Layouts
import Main from './layouts/Main';
import Application from './layouts/Application';
import Guardian from './misc/Guardian';
// Component/Redux Containers
import Dashboard from './components/Dashboard';
import BudgetDomains from './containers/BudgetDomains';
import BudgetCategories from './containers/BudgetCategories';
import SignIn from './containers/SignIn';

export default (
  <Route component={Main}>
    <Route component={Guardian}>
      <Route path='/' component={Application}>
        <IndexRoute component={Dashboard} />
        <Route path="budget_domains" component={BudgetDomains} />
        <Route path="budget_domains/:budgetDomainId/categories" component={BudgetCategories} />
      </Route>
    </Route>
    <Route path="/sign_in" component={SignIn} />
  </Route>
);
