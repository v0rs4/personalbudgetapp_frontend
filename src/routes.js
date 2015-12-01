/*eslint-disable */
import React from 'react';
/*eslint-enable */
import { Route, IndexRoute } from 'react-router';
import { guardian } from './helpers';

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
    <Route path='/' component={guardian(ApplicationLayout)}>
      <IndexRoute component={guardian(Dashboard)} />
      <Route path="budget_domains" component={guardian(BudgetDomains)} />
      <Route path="budget_domains/:budgetDomainId/categories" component={guardian(BudgetCategories)} />
    </Route>
    <Route path="/sign_in" component={SignIn} />
  </Route>
);
