import React from 'react';

class ArtistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const artist = this.props.artist;

    return (
      <div className="artist-item-container">
        <li className="artist-list-row">
        <div className="artist-item-info">
          <img src="" />Picture!
          <h1 className="artist-name">{artist.name}</h1>
        </div>
        </li>
      </div>
    );
  }
}

export default ArtistIndexItem;
