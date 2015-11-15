import React from 'react';
import ReactDom from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import {BudgetDomainsContainer} from './components/BudgetDomains';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    budgetDomains: [
      {"id":"1","type":"budget_domains","attributes":{"name":"Home","description":"Pauk's family budget","permissions":{"can_create":true,"can_read":true,"can_update":false,"can_destroy":false}}},
      {"id":"6","type":"budget_domains","attributes":{"name":"Pauk Fam","description":"","permissions":{"can_create":true,"can_read":true,"can_update":true,"can_destroy":true}}}
    ]
  }
});

const routes = <Route component={App}>
  <Route path="/budget_domains" component={BudgetDomainsContainer} />
</Route>

ReactDom.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
