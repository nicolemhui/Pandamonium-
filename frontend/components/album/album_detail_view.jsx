import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class AlbumDetailView extends React.Component {

  render() {
    const { album } = this.props;
    let artists;
    
    if (this.props.location.pathname == "/search") {
      artists = <NavLink to={`/artists/${album.artistId}`}
        className="album-artist"
        key={album.artistId}>
        {album.artistName}</NavLink>
    } else {
      artists = this.props.artists.map(artist =>
        <NavLink to={`/artists/${artist.id}`}
        className="album-artist"
        key={artist.id}>
        {artist.name}</NavLink>
      );
    }

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


export default withRouter(AlbumDetailView);