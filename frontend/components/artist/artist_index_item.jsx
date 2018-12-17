import React from 'react';

class ArtistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const artist = this.props.artist;
    
    return (
      <div className="artist-item-container">
        <div className="artist-grid-item">
          <div className="artist-item-info">
            <div className="artist-play-btn">
              <i className="fas fa-play"></i>
            </div>
            <img className="artist-img" src="" />Picture!
            <h3 className="artist-name">{artist.name}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistIndexItem;
