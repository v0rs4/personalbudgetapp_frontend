// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Redux
import {connect} from 'react-redux';

export const App = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    window.app = this;
    return  this.props.authorized ?
      this.props.children :
      <span>Unauthenticated</span>
  }
});

function mapStateToProps(state) {
  return {
    accessToken: state.get('accessToken'),
    authorized: state.get('authorized')
  };
}

export const AppContainer = connect(
  mapStateToProps
)(App);


