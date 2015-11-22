// Component
import SignIn from '../components/SignIn';
// Redux
import {connect} from 'react-redux';
// Actions
import { signIn, checkUserSignedIn } from '../action_creators';

export default connect(
  state => ({}),
  { signIn, checkUserSignedIn }
)(SignIn);
