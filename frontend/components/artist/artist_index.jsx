import React from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { searchString } = this.props;

    // debugger;

    if (this.props.searchString != undefined) {
      this.props.fetchSearchedArtists(searchString);
    } else {
      this.props.fetchArtists();
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchString != newProps.searchString) {
      this.props.fetchSearchedArtists(newProps.searchString);
    }
  }

  render() {
    if (!this.props.artists) return null;
    
    let noResults;
    if (this.props.artists.length === 0) {
      noResults = <div className="no-search-content">
        <h1>Nothing to see...</h1>
      </div>
    } else {
      noResults = "";
    }

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
        {noResults}
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