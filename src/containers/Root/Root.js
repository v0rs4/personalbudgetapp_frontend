import React from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

export default React.createClass({
  render: function() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <ReduxRouter />
      </Provider>
    );
  }
});
