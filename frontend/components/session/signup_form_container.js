import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "SIGN UP",
    navDescription: "Already have an account?",
    navLink: <Link to="/login" className="session-nav">log in to pandamonium</Link>,
  };
};

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);