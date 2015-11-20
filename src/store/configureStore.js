import {createStore, applyMiddleware, compose} from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import api from '../middlewares/api';
import DevTools from '../containers/DevTools';
import Immutable from 'immutable';
import createHistory from 'history/lib/createHashHistory';
import routes from '../routes';

const logger = createLogger({
  transformer: (state) => {
    var newState = {};
    for (var i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }
    return newState;
  }
});

const finalCreateStore = compose(
  applyMiddleware(thunk, api),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(logger),
  DevTools.instrument()
)(createStore);

export default function configureStore() {
  const store = finalCreateStore(reducer);
  return store;
}
