import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { reduxReactRouter, routerStateReducer as router } from 'redux-router';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from './middlewares/api';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';
import * as api from '../utils/api';
import {auth, budgetDomains, budgetCategories} from './bundles';
// import authReducer from './bundles/auth';
// import budgetDomainsReducer from './bundles/budgetDomains';
// import budgetCategoriesReducer from './bundles/budgetCategories';
// devtools
import createLogger from 'redux-logger';

const logger = createLogger({
  collapsed: true
});
const reducer = combineReducers({
  // auth: authReducer,
  // budgetDomains: budgetDomainsReducer,
  // budgetCategories: budgetCategoriesReducer,
  auth,
  budgetDomains,
  budgetCategories,
  router
});

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, apiMiddleware(api)),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(logger)
)(createStore);

export default function() {
  const store = finalCreateStore(reducer);
  return store;
}
