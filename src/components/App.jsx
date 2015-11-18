// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Redux
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const App = React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount: function(){
    this.props.authorizeAccessToken()
  },
  render: function() {
    window.app = this;
    return  this.props.authenticated ?
      this.props.children :
      null;
      // this.props.unauthenticated();
  }
});

function mapStateToProps(state) {
  return {
    accessToken: state.get('accessToken'),
    authenticated: state.get('authenticated')
  };
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App);


