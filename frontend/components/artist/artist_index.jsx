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
    const artists = this.props.artists.map(artist => {
      return (
        <ArtistIndexItem
          key={artist.id}
          artist={artist}
        />
      )
    });

    return (
      <div className="artists-main">
        <div className="artist-grid">
          {artists}
        </div>
      </div>
    )
  }
}

export default ArtistIndex;