import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class AlbumDetailView extends React.Component {

  render() {
    const { album } = this.props;

    const artists = this.props.artists.map(artist =>
      // <div key={artist.id}>
        <NavLink key={artist.id}to={`/artists/${artist.id}`}
          className="album-artist"
          key={artist.id}>
        {artist.name}</NavLink>
      // </div>
    );

    return (
      <li className="index-item">

      <Link to={`/albums/${album.id}`}>
        <div className="album-item-info">
          <div className="album-img"><img src={album.coverPhotoUrl}></img></div>
          <div className="album-play-btn">
            <i className="far fa-play-circle"></i>
          </div>

          <h1 className="album-title">{album.title}</h1>
        </div>
      </Link>
      
      <h1>{artists}</h1>
        
      </li>
    );
  }
}



export default AlbumDetailView;