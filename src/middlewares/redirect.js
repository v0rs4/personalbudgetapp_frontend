export default store => next => action => {
  const {redirectProtocol} = action;
  // Type checking
  if (typeof redirectProtocol !== 'function') {
    return next(action);
  }
  // Actual middleware
  redirectProtocol(action, store);
  // Propagation
  delete action.redirectProtocol;
  return next(action);
}
