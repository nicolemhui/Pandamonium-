import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchAlbums()
  }

  render() {
    const albums = this.props.albums.map(album => {
      return (
        <AlbumIndexItem
          key={album.id}
          album={album}
        />
      )
    });

    return (
      <div className="albums-main">
        <ul className="album-list">
          {albums}
        </ul>
      </div>
    )
  }
}

export default AlbumIndex;