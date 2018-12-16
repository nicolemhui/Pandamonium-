import React from 'react';
import { Link } from 'react-router-dom';

class SongDetailView extends React.Component {
  
  render() {
    
    const { song } = this.props;
    const artists = this.props.artists.map(artist => 
      <li key={artist.id}><a href="#">{artist.name}</a></li>
    )
    // const songAlbum = song.albums[0];

    // debugger

    return (
      <div className="song-item-info">
        <h1 className="song-title">{song.title}</h1>

        <div className="song-info">
          <div className="song-other-info">
            {/* <a href="#">{songAlbum}</a> */}
            •
            {artists}
            {/* <Link className="song-info-link" to={`/albums/${song.albumId}`}>{song.albumTitle}</Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default SongDetailView;