import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const artist = this.props.artist;
    if (!artist) return null;
    
    //FIX ME
    return (
      <div className="album-grid-item">
        <Link to={`/artists/${artist.id}`}>
        <div className="album-item-info">
          <div className="album-img"><img src={artist.photoUrl}></img></div>
          <div className="album-play-btn">
            <i className="far fa-play-circle"></i>
            {/* <i className="fas fa-play"></i> */}
          </div>

          <h1 className="album-title">
            <h3 className="artist-name">{artist.name}</h3>
          </h1>
        </div>
        </Link>
      </div>
    );
  }
}

export default ArtistIndexItem;