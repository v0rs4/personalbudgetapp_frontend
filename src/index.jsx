// React
import React from 'react';
import ReactDom from 'react-dom';
import Router, {Route} from 'react-router';
// Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {setAccessToken} from './action_creators';
// App
import {AppContainer} from './components/App';
import {BudgetDomainsContainer} from './components/BudgetDomains';
// Create redux store
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);
const store = createeStoreWithMiddleware(reducer);
// Init accessToken
store.dispatch(setAccessToken(localStorage.getItem('accessToken')));
// Create react routes
const routes = <Route component={AppContainer}>
  <Route path="/budget_domains" component={BudgetDomainsContainer} />
</Route>
// Render
ReactDom.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
