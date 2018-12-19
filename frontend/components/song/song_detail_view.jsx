import React from 'react';
import { NavLink } from 'react-router-dom';

class SongDetailView extends React.Component {
  
  render() {
    const { song } = this.props;
    let artists = this.props.artists;
    if (!artists) return null;

    //FIX ME!
    // how to get artist id??
    artists = artists.map(artist => 
      <NavLink to={`/collection/artists/{artistId}`}
        className="artist-text"
        key={artist.id}>
        {artist.name}
      </NavLink>
    );

    const albums = this.props.albums.map(album => 
      <NavLink to={`/collection/artists/{artistId}`}
        className="album-text"
        key={album.id}>
        {album.title}
      </NavLink>
    );

    return (
      <div className="song-item-info">

        <h3 className="song-title">{song.title}</h3>

        <div className="song-info">
          <div className="song-other-info">
            {/* FIX ME  */}
            {albums}
            •
            {artists}
          </div>
        </div>
      </div>
    );
  }
}

export default SongDetailView;