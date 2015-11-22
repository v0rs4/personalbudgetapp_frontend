// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Component
import Form from './form/Form'

export default React.createClass({
  componentWillMount: function() {
    this.props.checkUserSignedIn({redirectUrl: '/'});
  },
  render: function() {
    return <Form signIn={this.props.signIn} />;
  }
})
