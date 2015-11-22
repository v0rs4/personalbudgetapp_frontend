// React
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// Redux
import {connect} from 'react-redux';
import { authenticateUser } from '../action_creators';

const Guardian = React.createClass({
  mixins: [PureRenderMixin],
  componentWillMount: function(){
    this.props.authenticateUser();
  },
  render: function() {
    const { userSignedIn, children } = this.props
    return userSignedIn ? children : <p>Authenticating... (spinner)</p>;
  }
});

export default connect(
  state => (
    { userSignedIn: state.user.get('signedIn') }
  ),
  { authenticateUser }
)(Guardian)
