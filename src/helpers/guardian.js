import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { authenticateUser } from 'redux/bundles/auth';

export default function(Component) {
  const Guardian = React.createClass({
    displayName: 'Guardian',
    mixins: [PureRenderMixin],
    checkUserSignedIn: function(){
      const { userSignedIn, authenticateUser } = this.props;
      !userSignedIn && authenticateUser();
    },
    componentWillMount: function(){
      this.checkUserSignedIn();
    },
    componentDidUpdate: function() {
      this.checkUserSignedIn();
    },
    render: function() {
      const { userSignedIn } = this.props;
      return userSignedIn ? <Component {...this.props} /> : <p>Authenticating... (spinner)</p>;
    }
  });

  return connect(
    state => ({ userSignedIn: state.auth.isSignedIn }),
    { authenticateUser }
  )(Guardian);
}
