import React from 'react';
import ReactDom from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import BudgetDomainList from './components/BudgetDomainList';

const routes = <Route component={App}>
  <Route path="/budget_domains" component={BudgetDomainList} />
</Route>

ReactDom.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
