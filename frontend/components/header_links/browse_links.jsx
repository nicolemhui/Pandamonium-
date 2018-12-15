import React from 'react';
// import { NavLink } from 'react-router-dom';

class BrowseLinks extends React.Component {
  render() {
    return (
      <nav className="nav-links">
        <ul>
          <li><a href="/browse/featured">Featured</a></li>
          <li><a href="#">Podcasts</a></li>
          <li><a href="#">Charts</a></li>
          <li><a href="#">Genres & Moods</a></li>
          <li><a href="#">New Releases</a></li>
          <li><a href="#">Discover</a></li>
        </ul>
      </nav>
    )
  }
}

export default BrowseLinks


// <NavLink to="/browse/featured">Featured</Link>
// <Link to="/browse/featured">Podcasts</Link>
// <Link to="/browse/featured">Charts</Link>
// <Link to="/browse/featured">Genres & Moods</Link>
// <Link to="/browse/featured">New Releases</Link>
// <Link to="/browse/featured">Discover</Link>

// letter-style: upcase for all links 

//maybe turn this into a functional component