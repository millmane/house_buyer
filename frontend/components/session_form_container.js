import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // const formType = ownProps.location.pathname.slice(1);
  // const processForm = (formType === 'login') ? login : signup;
  // const processLogin = login;
  // const processSignup = signup;

  return {
    processLogin: (user) => dispatch(login(user)),
    processSignup: (user) => dispatch(signup(user)),
    // processForm: (user) => dispatch(processForm(user)),
    // formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
