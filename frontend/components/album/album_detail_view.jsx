import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class SongDetailView extends React.Component {

  render() {
    const { album } = this.props;

    const artists = this.props.artists.map(artist =>
      <li key={artist.id}>
        <NavLink to={`/artists/${artist.id}`}
          className="album-artist">
        {artist.name}</NavLink>
      </li>
    );

    return (
      <div className="album-item-info">
        <div className="album-img"><img src={album.coverPhotoUrl}></img></div>
        <div className="album-play-btn">
          <i class="far fa-play-circle"></i>
          {/* <i className="fas fa-play"></i> */}
        </div>

        <h1 className="album-title">
          <Link to={`/albums/${album.id}`} className="playlist-name">{album.title}</Link>
        </h1>
        
        {artists}

      </div>
    );
  }
}



export default SongDetailView;