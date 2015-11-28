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
    return (
      <form className="m-t" role="form" onSubmit={this.onSubmit}>
        <div className="form-group">
          <input ref="username" type="email" className="form-control" placeholder="Username" required="" />
        </div>
        <div className="form-group">
          <input ref="password" type="password" className="form-control" placeholder="Password" required="" />
        </div>
        <button type="submit" className="btn btn-primary block full-width m-b">Login</button>

        <a href="#"><small>Forgot password?</small></a>
        <p className="text-muted text-center"><small>Do not have an account?</small></p>
        <a className="btn btn-sm btn-white btn-block" href="">Create an account</a>
      </form>
    );
  }
});
