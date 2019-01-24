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
        <ul>
          <div className="nav-bar-links">
            <NavLink to="/collection/playlists" className="nav-links-link">Playlists<span></span></NavLink>
            <NavLink to="/collection/songs" className="nav-links-link">Songs<span></span></NavLink>
            <NavLink to="/collection/albums" className="nav-links-link">Albums<span></span></NavLink>
            <NavLink to="/collection/artists" className="nav-links-link">Artists<span></span></NavLink>
          </div>

          <div className="nav-link-button"> 
            <div><button className="create-playlist-btn" onClick={this.handleClick}>NEW PLAYLIST</button></div>
          </div>
        </ul>
        
      </nav>
    )
  }
}

export default CollectionLinks