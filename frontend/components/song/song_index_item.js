import React from 'react';
import SongDetailViewContainer from './song_detail_view_container';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { song } = this.props;

    return (
      <div className="song-item-container">
      <li className="songlist-row">
          
          <div className="song-play-btn">
            <i className="fas fa-music"></i>
          </div>
          
        
          <SongDetailViewContainer song={song} />
  
      </li>
    </div>
    )
  }
}

export default SongIndexItem;

//can props be passed down like this?