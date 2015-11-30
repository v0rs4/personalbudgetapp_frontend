/*eslint-disable */
// React
import React from 'react';
/*eslint-enable */
import {render} from 'react-dom';
// Redux
// import {setAccessToken} from './action_creators';
import {setAccessToken} from './redux/bundles/auth';
// import configureStore from './store/configureStore';
import createStore from './redux/createStore.dev';
// <Root />
import {Root} from './containers';
// Utils
import {retrieveToken} from './utils';
// Create store
const store = createStore();
window.store = store;
// Init accessToken
store.dispatch(setAccessToken(retrieveToken()));
// Render <Root />
render(
  <Root store={store} />,
  document.getElementById('app')
);
