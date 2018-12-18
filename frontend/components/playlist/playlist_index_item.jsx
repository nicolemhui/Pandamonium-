import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const playlist = this.props.playlist;

    return (
      <div className="playlist-grid-item">
        <div className="playlist-item-info">
          <div className="playlist-play-btn">
            <i className="fas fa-play"></i>
          </div>
          {/* <img className="playlist-img" src="" />Picture! */}
        </div>
          <Link to={`playlists/${playlist.id}`} className="playlist-name">{playlist.name}</Link>
      </div>
  
    );
  }
}

export default PlaylistIndexItem;
