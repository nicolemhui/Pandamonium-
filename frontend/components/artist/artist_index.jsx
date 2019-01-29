import React from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  //FIX ME!
  componentDidMount() {
    this.props.fetchArtists()
  }

  render() {
    if (!this.props.artists) return null;
    
    const artists = this.props.artists.map(artist => {
      return (
        <ArtistIndexItem
          key={artist.id}
          artist={artist}
        />
      )
    });

    return (
      <div className="album-item-container">
        <ul className="index-item-row">
          {artists}
        </ul>
      </div>
    )
  }
}

export default ArtistIndex;

// <div className="artists-main">
//   <div className="artist-grid">
//     {artists}
//   </div>
// </div>