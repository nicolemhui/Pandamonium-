import React from 'react';
import AlbumDetailViewContainer from './album_detail_view_container';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { album } = this.props;
    if (!album) return null;

    return (
      <AlbumDetailViewContainer album={album} />
    )
  }
}

export default AlbumIndexItem;

