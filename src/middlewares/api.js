import * as API from '../utils/api';

export default store => next => action => {
  // check if the action is related to api
  const apiMiddleware = action.apiMiddleware;
  if (typeof apiMiddleware == 'undefined') {
    return next(action);
  }
  // Type checking
  const { types, caller } = apiMiddleware;
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }
  if (typeof caller !== 'function') {
    throw new Error('Expected caller to be function.');
  }
  // Actual middleware stuff
  const [ requestType, successType, failureType ] = types

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction.apiMiddleware;
    return finalAction;
  }

  next(actionWith({ type: requestType }));

  return caller(API, store.getState).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'An unknown error occured'
    }))
  );
}
