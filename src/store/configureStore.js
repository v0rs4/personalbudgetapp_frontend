import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import reducer from '../reducer';
import api from '../middlewares/api';
import redirect from '../middlewares/redirect';
import DevTools from '../components/DevTools';
import Immutable from 'immutable';

const logger = createLogger({
  transformer: (state) => {
    var newState = {};
    for (var i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    };
    return newState;
  }
});

const finalCreateStore = compose(
  applyMiddleware(thunk, api, redirect, logger),
  DevTools.instrument()
)(createStore);

export default function configureStore() {
  const store = finalCreateStore(reducer);
  return store;
}
