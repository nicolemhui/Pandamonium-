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
          key={Math.floor(Math.random() * song.artistId)}>
          {song.artistName}
        </NavLink>

      songAlbums = <NavLink to={`/albums/${song.albumId}`}
        className="album-text"
        key={Math.floor(Math.random() * song.albumId)}>
        {song.albumTitle}
      </NavLink>

    } else {
      songArtists = artists.map(artist =>
        <NavLink to={`/artists/${artist.id}`}
          className="artist-text"
          key={artist.id}>
          {artist.name}
        </NavLink>
      );

      songAlbums = albums.map(album =>
        <NavLink to={`/albums/${album.id}`}
          className="album-text"
          key={album.id}>
          {album.title}
        </NavLink>
      );
    }

    console.log("song albums", songAlbums);
    console.log("song artists", songArtists);

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
      </div>
    } 

    // let songInfoText;

    // if (songAlbums.length === 0) {
    //   songInfoText = <div className="song-artists-links"> {songArtists} </div>
    // } else if (songArtists.length === 0) {
    //   songInfoText = <div className="song-artists-links"> {songAlbums} </div>
    // } else if ((songAlbums.length > 0) && (songArtists.length > 0)) {
    //   songInfoText = <div>
    //     {songArtists}
    //     •
    //     {songAlbums}
    //   </div>;
    // } else {
    //   songInfoText = <div></div>;
    // }

    return (
      <div className="song-item-info">

        <h3 className="song-title">{song.title}</h3>

        <div className="song-info">
          <div className="song-other-info">
            {/* {songArtists} • {songAlbums} */}
            {songInfoText}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SongDetailView);