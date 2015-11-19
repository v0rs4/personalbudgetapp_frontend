// React
import React from 'react';
import {render} from 'react-dom';
import Router, {Route} from 'react-router';
// Redux
import {Provider} from 'react-redux';
import {retrieveToken} from './action_creators';
import configureStore from './store/configureStore'
// <Root />
import Root from './components/Root';
// Create store
const store = configureStore();
// Init accessToken
store.dispatch(retrieveToken());
// Render <Root />
render(
  <Root store={store} />,
  document.getElementById('app')
)
