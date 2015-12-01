import {createStore, applyMiddleware, compose} from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from './middlewares/api';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';
import * as api from '../utils/api';
import reducer from './reducer';
// devtools
import createLogger from 'redux-logger';

const logger = createLogger({
  collapsed: true
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
