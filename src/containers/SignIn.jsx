// Component
import SignIn from '../components/SignIn';
// Redux
import {connect} from 'react-redux';
// Actions
import * as actionCreators from '../action_creators';

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  actionCreators
)(SignIn);
