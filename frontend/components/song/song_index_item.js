import React from 'react';
import SongDetailViewContainer from './song_detail_view_container';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openModal("add_song_to_playlist", this.props.song.id);
  }

  render() {
    const { song } = this.props;
    if (!song) return null;

    return (

      <li className="songlist-row">
        <div className="song-icon-display">
          <div className="song-music-btn">
            <i className="fas fa-music" />
          </div>

          <div className="song-play-btn">
            <i className="fas fa-play" />
          </div>
        </div>
        
        <SongDetailViewContainer song={song} />
        
        <button className="add-playlist-btn" 
        value="•••"
        onClick={this.handleClick}
        />
      </li>
    )
  }
}

export default SongIndexItem;

//can props be passed down like this?