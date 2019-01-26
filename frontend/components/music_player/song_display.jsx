import React from 'react';
import { Link } from 'react-router-dom';

class SongDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    let { currentSong, albums, artists } = this.props;    
    
    const songArtists = artists.map(artist => {
      return (
        <Link to={`/artists/${artist.id}`}
          className="player-song-artists"
          key={artist.id}>
          {artist.name}
        </Link>
      )
    });
    
    let album = albums[0];
    let albumPhoto;

    if (!album) {
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
            {/* <p>{album.name}</p> */}
            <Link to={`/albums/${currentSong.album_id}`}><h6 className="player-song-title">{currentSong.title}</h6></Link>
            {songArtists}
          </div>

          {/* <div className="favorite-song">
            <i className="fas fa-plus"></i>
          </div> */}
        </div>
      </div>
    )
  }    
}

export default SongDisplay;
