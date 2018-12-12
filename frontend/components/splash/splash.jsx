import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <h1> THIS IS THE SPLASH PAGE </h1>
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h1> THIS IS THE SPLASH PAGE </h1>
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );
  
  return currentUser ? personalGreeting() : sessionLinks();
};


export default Splash;