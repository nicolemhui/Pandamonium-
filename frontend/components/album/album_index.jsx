import React from 'react';
import AlbumIndexItem from './album_index_item';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
  display: block;
  margin: 0 auto;
`;

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: props.searchString,
      loading: true
    };
  }

  componentDidMount() {
    let { searchString } = this.props;
    
    if (this.props.searchString != undefined) {
      this.setState({ loading: false });
      this.props.fetchSearchedAlbums(searchString);
    } else {
      this.props.fetchAlbums()
        .then(() => window.setTimeout(() => this.setState({ loading: false }), 700));
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchString != newProps.searchString) {
      this.setState({ loading: false });
      this.props.fetchSearchedAlbums(newProps.searchString)
    }
  }

  render() {
    if (!this.props.albums) return null;
    
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

    const albums = this.props.albums.map(album => {
      return (
        <AlbumIndexItem key={album.id} album={album}/>
      )
    });

    return (
      <div className="album-item-container">
        <ul className="index-item-row">
          {albums}
        </ul>
      </div>
    )
  }
}

export default AlbumIndex;