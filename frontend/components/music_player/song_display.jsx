import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SongDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    let { currentSong, albums, artists, albumArtists } = this.props;    
    
    let songArtists;
    
    if (this.props.location.pathname == "/search") {
      songArtists = <Link to={`/artists/${currentSong.artistId}`}
        className="player-song-artists"
        key={currentSong.artistId}>
        {currentSong.artistName}
      </Link>
    } else if (artists) {
      songArtists = artists.map(artist => {
        return (
          <Link to={`/artists/${artist.id}`}
            className="player-song-artists"
            key={artist.id}>
            {artist.name}
          </Link>
        )
      });
    } else {
      songArtists = albumArtists.map(artist => {
        return (
          <Link to={`/artists/${artist.id}`}
            className="player-song-artists"
            key={artist.id}>
            {artist.name}
          </Link>
        )
      });
    }

    let album = albums[0];
    let albumPhoto;

    if (currentSong.photoUrl) {
      albumPhoto = <img src={currentSong.photoUrl} />
    } else if (currentSong.albumCoverPhotoUrl) {
      albumPhoto = <img src={currentSong.albumCoverPhotoUrl} />
    } else if (!album) {
      albumPhoto = <img src="https://s3-us-west-1.amazonaws.com/pandamonium-resources/new_playlist.png" />
    } else {
      albumPhoto = <img src={album.coverPhotoUrl} />
    }

    return (
      <div className="left-container">
        <div className="song-info-container">
          <div className="player-image">
            {albumPhoto}
          </div>

          <div className="song-title-artist">
            <h6 className="player-song-title">{currentSong.title}</h6>
            {songArtists}
          </div>

        </div>
      </div>

    )
  }    
}

export default withRouter(SongDisplay);
