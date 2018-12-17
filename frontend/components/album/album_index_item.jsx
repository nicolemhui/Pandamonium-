import React from 'react';
import AlbumDetailViewContainer from './album_detail_view_container';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { album } = this.props;

    return (
      <div className="album-item-container">
        <li className="album-list-row">

          <div className="album-play-btn">
            <i className="fas fa-music"></i>
          </div>


          <AlbumDetailViewContainer album={album} />

        </li>
      </div>
    )
  }
}

export default AlbumIndexItem;
