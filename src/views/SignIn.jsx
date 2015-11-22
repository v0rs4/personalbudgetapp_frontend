// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Component
import SignInForm from '../components/SignInForm'

export default React.createClass({
  componentWillMount: function() {
    this.props.checkUserSignedIn({redirectUrl: '/'});
  },
  render: function() {
    return <SignInForm signIn={this.props.signIn} />;
  }
})
