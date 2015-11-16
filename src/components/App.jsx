// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Redux
import {connect} from 'react-redux';

export const App = React.createClass({
  mixins: [PureRenderMixin],
  accessTokenValid: function(){
    return true;
  },
  render: function() {
    return  this.accessTokenValid() ?
      this.props.children :
      null;
  }
});

function mapStateToProps(state) {
  return {
    accessToken: state.get('accessToken')
  };
}

export const AppContainer = connect(
  mapStateToProps
)(App);


