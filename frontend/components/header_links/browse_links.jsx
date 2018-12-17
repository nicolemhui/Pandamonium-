import React from 'react';
import { NavLink } from 'react-router-dom';

class BrowseLinks extends React.Component {
  render() {
    return (
      <nav className="nav-links">
        <ul>
          <NavLink to="/browse/featured" className="nav-links-link">Featured</NavLink>
          <NavLink to="/browse/featured" className="nav-links-link">Podcasts</NavLink>
          <NavLink to="/browse/featured" className="nav-links-link">Charts</NavLink>
          <NavLink to="/browse/featured" className="nav-links-link">Genres & Moods</NavLink>
          <NavLink to="/browse/featured" className="nav-links-link">New Releases</NavLink>
          <NavLink to="/browse/featured" className="nav-links-link">Discover</NavLink>

        </ul>
      </nav>
    )
  }
}

export default BrowseLinks

  // < li > <a href="#">Podcasts</a></li >
  //   <li><a href="#">Charts</a></li>
  //   <li><a href="#">Genres & Moods</a></li>
  //   <li><a href="#">New Releases</a></li>
  //   <li><a href="#">Discover</a></li>

// <NavLink to="/browse/featured">Featured</Link>
// <Link to="/browse/featured">Podcasts</Link>
// <Link to="/browse/featured">Charts</Link>
// <Link to="/browse/featured">Genres & Moods</Link>
// <Link to="/browse/featured">New Releases</Link>
// <Link to="/browse/featured">Discover</Link>

// letter-style: upcase for all links 

//maybe turn this into a functional component