import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userGreeting = () => (
      <hgroup className="header-group">
        <div className="header-content">
          <i className="fas fa-user-circle"></i>
          <h4 className="header-name">{this.props.currentUser.username}</h4>
        </div>
        <Link to="/" className="logout-btn" onClick={this.props.logout}>Log Out</Link>
      </hgroup>
    );
    
    return (
      <aside className="sidenav">
        <div className="sidenav-header-logo">
          <NavLink to="/collection/playlists" className="links-detail">
            <i className="fab fa-spotify"></i>
            <h3 className="header-logo">Pandamonium</h3>
          </NavLink>
        </div>

        <div className="sidenav-mid-content">
          <ul>
            <li>
              <div className="sidenav-links">
                <NavLink to="/search" className="links-detail">
                  <i className="fas fa-search"></i>
                  <span className="sidenav-links-description">Search</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="sidenav-links">
                <NavLink to="/browse/playlists" className="links-detail">
                  <i className="fas fa-home"></i>
                  <span className="sidenav-links-description">Home</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="sidenav-links">
                <NavLink to="/collection/playlists" className="links-detail">
                  <i className="fas fa-book-open"></i>
                  <span className="sidenav-links-description">Your Library</span>
                </NavLink>
              </div>
            </li>
          </ul>
        </div>

        <div className="nav-greeting-logout">
          {this.props.currentUser ? userGreeting() : ""}
        </div>
      </aside>
    )
  }
}

export default SideNav;