import React from 'react';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const personalGreeting = () => (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
        <Link to="/" className="logout-btn" onClick={this.props.logout}>Log Out</Link>
      </hgroup>
    );
    
    return (
      <aside className="sidenav">
        <div className="sidenav-header-logo">
          <a href="/browse/featured">
            <i className="fab fa-spotify"></i>
            <h3 className="header-logo">Pandamonium</h3>
          </a>
        </div>
        <ul>
          <li>
            <div className="sidenav-links">
              <a href="/search">
                <i className="fas fa-search"></i>
                <span className="sidenav-links-description">Search</span>
              </a>
            </div>
          </li>
          <li>
            <div className="sidenav-links">
              <a href="/browse/featured">
                <i className="fas fa-home"></i>
                <span className="sidenav-links-description">Home</span>
              </a>
            </div>
          </li>
          <li>
            <div className="sidenav-links">
            {/* default link to albums, change to playlists later */}
              <a href="/collection/albums">
                <i className="fas fa-grip-lines-vertical"></i>
                <i className="fas fa-slash"></i>
                <span className="sidenav-links-description">Your Library</span>
              </a>
            </div>
          </li>
        </ul>

        <div className="recently-played">
          <ul>
            <li>Playlist 1</li>
            <li>Playlist 2</li>
            <li>Playlist 3</li>
          </ul>
        </div>

        <div className="nav-greeting-logout">
          {this.props.currentUser ? personalGreeting() : ""}
        </div>
      </aside>
    )
  }
}

export default SideNav;