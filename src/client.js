/*eslint-disable */
// React
import React from 'react';
/*eslint-enable */
import {render} from 'react-dom';
// Redux
import {setAccessToken} from './action_creators';
import configureStore from './store/configureStore';
// <Root />
import {Root} from './containers';
// Utils
import {retrieveToken} from './utils';
// Create store
const store = configureStore();
// Init accessToken
store.dispatch(setAccessToken(retrieveToken()));
// store.dispatch(retrieveToken());
// Render <Root />
render(
  <Root store={store} />,
  document.getElementById('app')
);
