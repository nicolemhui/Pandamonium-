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
      <div className="album-play-btn">
        <i className="fas fa-play"></i>
      </div>
        <div className="album-img">IMAGE HERE <img src="../../../../app/assets/images/linkin_park_hybrid_theory.png"/></div>
  
        <h1 className="album-title">{album.title}</h1>
        
        {artists}

      </div>
    );
  }
}



export default SongDetailView;