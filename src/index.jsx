// React
import React from 'react';
import ReactDom from 'react-dom';
import Router, {Route} from 'react-router';
// Redux
import {Provider} from 'react-redux';
import {retrieveToken} from './action_creators';
import configureStore from './store/configureStore'
// App
import Root from './components/Root';
import {AppContainer} from './components/App';
import {BudgetDomainsContainer} from './components/BudgetDomains';
import {SignInContainer} from './components/SignIn'
const store = configureStore();
// Init accessToken
store.dispatch(retrieveToken());
// Create react routes; TODO: add Root component
const routes = <Route component={Root}>
  <Route component={AppContainer}>
    <Route path="/" component={BudgetDomainsContainer} />
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
