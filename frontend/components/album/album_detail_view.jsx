import React from 'react';
import { NavLink } from 'react-router-dom';

class SongDetailView extends React.Component {

  render() {

    const { album } = this.props;

    const artists = this.props.artists.map(artist =>
      <li key={artist.id}>
        <NavLink to="/collection/artists"
          className="album-artist">
        {artist.name}</NavLink>
      </li>
    );


    return (
      <div className="album-item-info">
        <div class="album-img">IMAGE HERE <img src="linkin_park_hybrid_theory.png"/></div>
        <div className="album-play-btn">
          <i className="fas fa-music"></i>
        </div>

        <h1 className="album-title">{album.title}</h1>
        
        {artists}

      </div>
    );
  }
}



export default SongDetailView;