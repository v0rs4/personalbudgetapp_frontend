/*eslint-disable */
import React from 'react';
/*eslint-enable */
import { render } from 'react-dom';
import { setAccessToken } from './redux/bundles/auth';
import createStore from './redux/createStore.dev';
import { Root } from './containers';
import { retrieveToken } from './helpers';
// Create store
const store = createStore();
// Init accessToken
store.dispatch(setAccessToken(retrieveToken()));
// Render <Root />
render(
  <Root store={store} />,
  document.getElementById('app')
);
