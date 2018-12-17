import React from 'react';
import { NavLink } from 'react-router-dom';

class SongDetailView extends React.Component {
  
  render() {
    
    const { song } = this.props;

    // how to get artist id??
    const artists = this.props.artists.map(artist => 
      <NavLink to={`/collection/artists/{artistId}`}>
        {artist.name}
      </NavLink>
    );

      
    const albums = this.props.albums.map(album => 
      <NavLink to={`/collection/artists/{artistId}`}>
        {album.title}
      </NavLink>
    );

    return (
      <div className="song-item-info">
        <h1 className="song-title">{song.title}</h1>

        <div className="song-info">
          <div className="song-other-info">
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