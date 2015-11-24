// React
import React from 'react';
// Redux
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import DevTools from './DevTools';

export default React.createClass({
  render: function() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter />
          <DevTools />
        </div>
      </Provider>
    );
  }
});
