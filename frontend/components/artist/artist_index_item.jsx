import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const artist = this.props.artist;
    if (!artist) return null;
    
    return (
      <li className="index-item">
        <Link to={`/artists/${artist.id}`}>
        <div className="album-item-info">
          <div className="artist-img"><img src={artist.photoUrl}></img></div>
          <div className="album-play-btn">
            <i className="far fa-play-circle"></i>
          </div>
        </div>
          <h1 className="album-title">{artist.name}</h1>
        </Link>
      </li>
    );
  }
}

export default ArtistIndexItem;