import React from 'react';
import { NavLink } from 'react-router-dom';

class BrowseLinks extends React.Component {
  render() {
    return (
      <nav className="nav-links">
        <div className="nav-links-container">
          <div className="nav-bar-links">
            <NavLink to="/browse/playlists" className="nav-links-link" activeClassName="active-nav-link">Playlists</NavLink>
            {/* <NavLink to="/browse/made-for-you" className="nav-links-link" activeClassName="active-nav-link">Made for you</NavLink> */}
            <NavLink to="/browse/songs" className="nav-links-link" activeClassName="active-nav-link">Songs</NavLink>
            <NavLink to="/browse/albums" className="nav-links-link" activeClassName="active-nav-link">Albums</NavLink>
            <NavLink to="/browse/artists" className="nav-links-link" activeClassName="active-nav-link">Artists</NavLink>
          </div>

          <div className="nav-link-button">
            <div><button className="blank-space"></button></div>
          </div>
        </div>

      </nav>
    )
  }
}

export default BrowseLinks;