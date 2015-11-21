// import React from 'react';
import Navbar from '../components/Navbar';
// Redux
import { connect } from 'react-redux';
import { signOut } from '../action_creators';

function mapStateToProps(state) {
  return {
    userSignedIn: state.user.get('signedIn')
  };
}

export default connect(
  mapStateToProps,
  { signOut }
)(Navbar);
