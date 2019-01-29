import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    let { searchString } = this.props;

    if ((searchString) && (searchString.length !== 0)) {
      this.props.fetchSearchedAlbums(searchString);
    } else {
      this.props.fetchAlbums();
    }
  }

  render() {
    if (!this.props.albums) return null;
    const albums = this.props.albums.map(album => {
      return (
        <AlbumIndexItem key={album.id} album={album}/>
      )
    });

    // FIX ME!
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