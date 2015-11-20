// import React from 'react';
import SignIn from '../components/SignIn';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  actionCreators
)(SignIn);
