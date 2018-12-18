import React from 'react';
import { NavLink } from 'react-router-dom';

class CollectionLinks extends React.Component {  
  render() {
    return (
      <nav className="nav-links">
        <ul>
          <NavLink to="/collection/playlists" className="nav-links-link">Playlists<span></span></NavLink>
          <NavLink to="/collection/made-for-you" className="nav-links-link">Made for you<span></span></NavLink>
          <NavLink to="/collection/songs" className="nav-links-link">Songs<span></span></NavLink>
          <NavLink to="/collection/albums" className="nav-links-link">Albums<span></span></NavLink>
          <NavLink to="/collection/artists" className="nav-links-link">Artists<span></span></NavLink>
          <NavLink to="/collection/podcasts" className="nav-links-link">Podcasts<span></span></NavLink>
        </ul>
        
      </nav>
    )
  }
}

export default CollectionLinks