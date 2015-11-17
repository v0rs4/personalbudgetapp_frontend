import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import reducer from '../reducer';
import api from '../middlewares/api';

const logger = createLogger({
  transformer: (state) => {
    return state.toJS();
  }
});

const finalCreateStore = applyMiddleware(thunk, api, logger)(createStore);

export default function configureStore() {
  const store = finalCreateStore(reducer);
  return store;
}
