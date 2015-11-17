import * as API from '../utils/api';

export default store => next => action => {
  // check if the action is related to api
  const callAPI = action.callAPI;
  if (typeof callAPI == 'undefined') {
    return next(action);
  }
  // Type checking
  const { endpoint, types, authorization } = callAPI;
  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }
  if (typeof authorization !== 'boolean') {
    throw new Error('Expected authorization to be boolean.');
  }
  // Actual middleware stuff
  const [ requestType, successType, failureType ] = types
  const accessToken = store.getState().get('accessToken');

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction.callAPI;
    return finalAction;
  }

  next(actionWith({ type: requestType }))

  return API.call(endpoint, {accessToken, authorization}).then(
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
