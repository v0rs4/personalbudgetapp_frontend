// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Redux
import {connect} from 'react-redux';
// Action creators
import * as actionCreators from '../action_creators';

export const App = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return this.props.children
  }
});

function mapStateToProps(state) {
  return {};
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App);


