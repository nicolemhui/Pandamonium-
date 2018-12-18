import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const playlist = this.props.playlist;
    debugger

    return (
      <div className="playlist-grid-item">
        <div className="playlist-item-info">
          <div className="playlist-play-btn">
            <i className="fas fa-play"></i>
          </div>
          {/* <img className="playlist-img" src="" />Picture! */}
        </div>
          <NavLink to={`playlists/${playlist.id}`} className="playlist-name">{playlist.name}</NavLink>
      </div>
  
    );
  }
}

export default PlaylistIndexItem;
