import React from 'react';
import { NavLink } from 'react-router-dom';

class CollectionLinks extends React.Component {  
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openModal("create_new_playlist");
  }

  render() {
    return (
      <nav className="nav-links">
        <div className="nav-links-container">
          <div className="nav-bar-links">
            <NavLink to="/collection/playlists" className="nav-links-link" activeClassName="active-nav-link">Playlists</NavLink>
            <NavLink to="/collection/songs" className="nav-links-link" activeClassName="active-nav-link">Songs</NavLink>
            <NavLink to="/collection/albums" className="nav-links-link" activeClassName="active-nav-link">Albums</NavLink>
            <NavLink to="/collection/artists" className="nav-links-link" activeClassName="active-nav-link">Artists</NavLink>
          </div>

          <div className="nav-link-button"> 
            <div><button className="create-playlist-btn" onClick={this.handleClick}>NEW PLAYLIST</button></div>
          </div>
        </div>
        
      </nav>
    )
  }
}

export default CollectionLinks