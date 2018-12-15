import React from 'react';
// import { NavLink } from 'react-router-dom';

class CollectionLinks extends React.Component {
  render() {
    return (
      <nav className="nav-links">
        <ul>
          <li><a href="#">Playlists</a></li>
          <li><a href="#">Made for you</a></li>
          <li><a href="#">Songs</a></li>
          <li><a href="#">Albums</a></li>
          <li><a href="#">Artists</a></li>
          <li><a href="#">Podcasts</a></li>
        </ul>
      </nav>
    )
  }
}

export default CollectionLinks


// <NavLink to="/browse/featured">Featured</Link>
// <Link to="/browse/featured">Podcasts</Link>
// <Link to="/browse/featured">Charts</Link>
// <Link to="/browse/featured">Genres & Moods</Link>
// <Link to="/browse/featured">New Releases</Link>
// <Link to="/browse/featured">Discover</Link>

// letter-style: upcase for all links 

//maybe turn this into a functional component