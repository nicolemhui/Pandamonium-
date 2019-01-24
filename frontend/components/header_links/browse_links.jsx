import React from 'react';
import { NavLink } from 'react-router-dom';

class BrowseLinks extends React.Component {
  render() {
    return (
      <nav className="nav-links">
        <ul>
          <div className="nav-bar-links">
            <NavLink to="/browse/playlists" className="nav-links-link">Playlists<span></span></NavLink>
            <NavLink to="/browse/made-for-you" className="nav-links-link">Made for you<span></span></NavLink>
            <NavLink to="/browse/songs" className="nav-links-link">Songs<span></span></NavLink>
            <NavLink to="/browse/albums" className="nav-links-link">Albums<span></span></NavLink>
            <NavLink to="/browse/artists" className="nav-links-link">Artists<span></span></NavLink>
          </div>
        </ul>

      </nav>
    )
  }
}

export default BrowseLinks