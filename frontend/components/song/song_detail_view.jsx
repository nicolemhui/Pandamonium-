import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class SongDetailView extends React.Component {

  render() {
    const { song, artists, albums } = this.props;

    if (!artists || !song || !albums) return null;
    
    let songArtists;
    let songAlbums;

    if (this.props.location.pathname == "/search") {
      songArtists = <NavLink to={`/artists/${song.artistId}`}
          className="artist-text"
          key={Math.floor((Math.random() * song.artistId) + 1)}>
          {song.artistName}
        </NavLink>

      songAlbums = <NavLink to={`/albums/${song.albumId}`}
        className="album-text"
        key={Math.floor((Math.random() * song.albumId)) + 1}>
        {song.albumTitle}
      </NavLink>

    } else {
      songArtists = artists.map(artist =>
        <NavLink to={`/artists/${artist.id}`}
          className="artist-text"
          key={Math.floor((Math.random() * artist.id) + 1)}>
          {artist.name}
        </NavLink>
      );

      songAlbums = albums.map(album =>
        <NavLink to={`/albums/${album.id}`}
          className="album-text"
          key={Math.floor((Math.random() * album.id) + 1)}>
          {album.title}
        </NavLink>
      );
    }

    let songInfoText;
    let songClass = "song-other-info";

    if (songAlbums.length === 0) {
      songInfoText = <div className="song-artists-links">{songArtists}</div>
    } else if (songArtists.length === 0) {
      songInfoText = <div className="song-artists-links">{songAlbums}</div>
    } else {
      songInfoText = <div className={songClass}>
        {songArtists}
        •
        {songAlbums}
      </div>
    } 

    return (
      <div className="song-item-info">
        <h3 className="song-title">{song.title}</h3>
        {/* <div className="song-info"> */}
          {/* <div className="song-other-info"> */}
            {songInfoText}
          {/* </div> */}
        {/* </div> */}
      </div>
    );
  }
}

export default withRouter(SongDetailView);