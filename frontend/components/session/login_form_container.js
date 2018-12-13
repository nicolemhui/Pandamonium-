import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "LOG IN",
    navDescription: "Don't have an account?",
    navLink: <Link to="/signup" className="session-nav-link">Sign up</Link>
  };
};

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(login(user)),
  demo: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);