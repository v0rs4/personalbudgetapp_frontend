import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const SignIn = React.createClass({
  mixins: [PureRenderMixin],
  componentWillMount: function() {
    this.props.checkAuthenticated();
  },
  onSubmit: function(event) {
    event.preventDefault();
    let username = this.refs.username.value.trim();
    let password = this.refs.password.value.trim();
    this.props.authenticate(username, password);
  },
  render: function() {
    return <form onSubmit={this.onSubmit}>
      <input type="email" ref="username" placeholder="Username"/> <br/>
      <input type="password" ref="password" placeholder="Password"/> <br/>
      <button type="submit">SignIn</button>
    </form>
  }
});

function mapStateToProps(state) {
  return {};
}

export const SignInContainer = connect(
  mapStateToProps,
  actionCreators
)(SignIn);
