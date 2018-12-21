import React from 'react';
import SongIndexItemContainer from './song_index_item_container';
import { fetchSongs } from '../../actions/song_actions';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
  // componentDidMount() {
    this.props.fetchSongs()
    // .then(() => this.setState({ songs: this.props.songs }))
  }

  handlePlay() {
    this.props.receiveCurrentSong(song);
  }
  
  render() {
    let songs = this.props.songs;
    if (!songs) return null;
    
    songs = this.props.songs.map( song => {
      return (
        <SongIndexItemContainer
          key={song.id}
          song={song}
        />
      )
    });  
    
    return (
      <div className="song-item-container">
        <ul className="song-list">
          {songs}
        </ul>
      </div>
    )
  }
}

export default SongIndex;