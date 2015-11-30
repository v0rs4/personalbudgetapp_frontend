import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { reduxReactRouter, routerStateReducer as router } from 'redux-router';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from './middlewares/api';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';
import * as api from '../utils/api';
import {auth, budgetDomains, budgetCategories} from './bundles';
// devtools
import createLogger from 'redux-logger';

const reducer = combineReducers({
  auth,
  budgetDomains,
  budgetCategories,
  router
});

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, apiMiddleware(api)),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(createLogger())
)(createStore);

export default function() {
  const store = finalCreateStore(reducer);
  return store;
}
