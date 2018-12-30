import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
   
    return (
      <div> 

      <header className="header">
        <nav className="nav-bar">
          <div className="logo">
            <i className="fab fa-spotify"></i>
            <h1 className="header-logo">Pandamonium</h1>
          </div>
          <ul className="header-list">
            <li><a href="https://github.com/nicolemhui"><i className="fab fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/nicolemhui/"><i className="fab fa-linkedin"></i></a></li>
            <li>|</li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </nav>
      </header>

      <section className="main-content">
        <h1>Music for everyone.</h1>
        <h3>Millions of songs. No credit card needed.</h3>
        <a href="#">GET PANDAMONIUM FREE</a>

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