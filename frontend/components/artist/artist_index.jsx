import React from 'react';
import ArtistIndexItem from './artist_index_item';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
  display: block;
  margin: 0 auto;
`;

class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true }
  }

  componentDidMount() {
    let { searchString } = this.props;

    if (this.props.searchString != undefined) {
      this.setState({ loading: false });
      this.props.fetchSearchedArtists(searchString);
    } else {
      this.props.fetchArtists()
        .then(() => window.setTimeout(() => this.setState({ loading: false }), 700));
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchString != newProps.searchString) {
      this.setState({ loading: false });
      this.props.fetchSearchedArtists(newProps.searchString);
    }
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

    if (this.state.loading) {
      return (
        <div className='loading-spinner'>
          <BeatLoader
            css={override}
            sizeUnit={"px"}
            size={20}
            color={'#1DB954'}
            loading={this.state.loading}
          />
        </div>
      )
    };
    
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