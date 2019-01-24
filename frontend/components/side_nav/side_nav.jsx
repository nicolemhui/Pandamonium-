import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userGreeting = () => (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
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
              {/* default link to albums, change to playlists later */}
                <NavLink to="/collection/playlists" className="links-detail">
                  <i className="fas fa-grip-lines-vertical"></i>
                  <i className="fas fa-slash"></i>
                  <span className="sidenav-links-library">Your Library</span>
                </NavLink>
              </div>
            </li>
          </ul>
          <ul className="recently-played">
            <h5>Recently Played</h5>
              <li>Playlist 1</li>
              <li>Playlist 2</li>
              <li>Playlist 3</li>
          </ul>
        </div>
        
        <span className="nav-divider"></span>

        <div className="nav-greeting-logout">
          {this.props.currentUser ? userGreeting() : ""}
        </div>
      </aside>
    )
  }
}

export default SideNav;