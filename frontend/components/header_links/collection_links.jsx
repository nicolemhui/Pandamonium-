import React from 'react';
import { NavLink } from 'react-router-dom';

class CollectionLinks extends React.Component {  
  render() {
    return (
      <nav className="nav-links">
        <ul>
          <NavLink to="/collection/playlists" className="nav-links-link">Playlists<span /></NavLink>
          <NavLink to="/collection/made-for-you" className="nav-links-link">Made for you<span /></NavLink>
          <NavLink to="/collection/songs" className="nav-links-link">Songs<span /></NavLink>
          <NavLink to="/collection/albums" className="nav-links-link">Albums<span /></NavLink>
          <NavLink to="/collection/artists" className="nav-links-link">Artists<span /></NavLink>
          <NavLink to="/collection/podcasts" className="nav-links-link">Podcasts<span /></NavLink>
        </ul>
        
      </nav>
    )
  }
}

export default CollectionLinks

  // < NavLink to = "/browse/featured" className = "nav-links-link" > Playlists</NavLink >
  //   <NavLink to="/browse/featured" className="nav-links-link">Made for you</NavLink>
  //   <NavLink to="/browse/featured" className="nav-links-link">Songs</NavLink>
  //   <NavLink to="/browse/featured" className="nav-links-link">Albums</NavLink>
  //   <NavLink to="/browse/featured" className="nav-links-link">Artists</NavLink>
  //   <NavLink to="/browse/featured" className="nav-links-link">Podcasts</NavLink>


// letter-style: upcase for all links 

//maybe turn this into a functional component