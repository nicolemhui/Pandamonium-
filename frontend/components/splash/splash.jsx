import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
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
      <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
      <Link to="/" className="logout-btn" onClick={this.props.logout}>Log Out</Link>
    </hgroup>
  );

   
    return (
      <div> 

      <header className="header">
        <nav className="nav-bar">
          <div className="logo">
            <i className="fab fa-spotify"></i>
            <h1 className="header-logo">Pandamonium</h1>
          </div>
          <ul className="header-list">
            <li><a href="#"><i className="fab fa-github"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            <li>|</li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </nav>
      </header>

      {/* <div class="responsive-nav">
        <div class="hamburger-btn" id="hamburger-btn">
          <div></div>
            <i class="fas fa-bars"></i>
        </div>

        <div class="responsive-modal">
          <ul>
            <li>Sign Up</li>
            <li>Log In</li>
            <li>Demo</li>
          </ul>
        </div>
      </div> */}

      {this.props.currentUser ? personalGreeting() : sessionLinks()}

      <section className="main-content">
        <h1>Music for everyone.</h1>
        <h3>Millions of songs. No credit card needed.</h3>
        <a href="#">GET PANDAMONIUM FREE</a>

      </section>

      <section className="content-main">
        <h1>Ads and stuff :)</h1>
      </section>

      <footer className="footer">

        <div className="footer-logo">
          <i className="fab fa-spotify"></i>
          <h1 className="header-logo">Pandamonium</h1>
        </div>

        <div className="footer-links">
          <h5>LINKS</h5>
          <li><a href="#">Github</a></li>
          <li><a href="#">LinkedIn</a></li>
        </div>
      </footer>
      
      </div>
    )
  }
};

export default Splash;