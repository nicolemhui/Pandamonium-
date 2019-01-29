import React from 'react';
import { NavLink } from 'react-router-dom';

class SongDetailView extends React.Component {
  
  
  render() {
    const { song, artists, albums } = this.props;

    if (!artists || !song || !albums) return null;
    
    //FIX ME!
    // how to get artist id??
    const songArtists = artists.map(artist => {
    
      return (
      <NavLink to={`/collection/artists/${artist.id}`}
        className="artist-text"
        key={artist.id}>
        {artist.name}
      </NavLink>
      )}
    );

    const songAlbums = albums.map(album => 
      <NavLink to={`/collection/albums/${album.id}`}
        className="album-text"
        key={album.id}>
        {album.title}
      </NavLink>
    );

    let songInfoText;

    if (songAlbums.length === 0) {
      songInfoText = <div className="song-artists-links"> {songArtists} </div>
    } else if (songArtists.length === 0) {
      songInfoText = <div className="song-artists-links"> {songAlbums} </div>
    } else {
      songInfoText = <div>
        {songArtists}
        •
        {songAlbums}
      </div>;
    }

    return (
      <div className="song-item-info">

        <h3 className="song-title">{song.title}</h3>

        <div className="song-info">
          <div className="song-other-info">
            {songInfoText}
          </div>
        </div>
      </div>
    );
  }
}

export default SongDetailView;