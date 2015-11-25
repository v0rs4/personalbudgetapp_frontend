/*eslint-disable */
// React
import React from 'react';
/*eslint-enable */
// import {render} from 'react-dom';
// Redux
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

store.dispatch({type: 'SF'});
