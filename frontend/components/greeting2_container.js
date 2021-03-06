import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Greeting2 from './greeting2';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting2);
