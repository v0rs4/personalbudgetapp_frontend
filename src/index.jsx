// React
import React from 'react';
import ReactDom from 'react-dom';
import Router, {Route} from 'react-router';
// Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {setAccessToken, authorize} from './action_creators';
// App
import {AppContainer} from './components/App';
import {BudgetDomainsContainer} from './components/BudgetDomains';
import {SignInContainer} from './components/SignIn'
// Create redux store
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);
const store = createStoreWithMiddleware(reducer);
// Init accessToken
store.dispatch(authorize(localStorage.getItem('accessToken')));
// Create react routes
const routes = <Route>
  <Route component={AppContainer}>
    <Route path="/budget_domains" component={BudgetDomainsContainer} />
  </Route>
  <Route path="/sign_in" component={SignInContainer} />
</Route>
// Render
ReactDom.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
