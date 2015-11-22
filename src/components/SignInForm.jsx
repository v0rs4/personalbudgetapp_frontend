// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  onSubmit: function(event) {
    event.preventDefault();
    let username = this.refs.username.value.trim();
    let password = this.refs.password.value.trim();
    this.props.signIn(username, password);
  },
  render: function() {
    return <form onSubmit={this.onSubmit}>
      <input type="email" ref="username" placeholder="Username"/> <br/>
      <input type="password" ref="password" placeholder="Password"/> <br/>
      <button type="submit">SignIn</button>
    </form>
  }
});
