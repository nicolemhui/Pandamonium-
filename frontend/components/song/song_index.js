import React from 'react';
import SongIndexItemContainer from './song_index_item_container';
import { fetchSongs } from '../../actions/song_actions';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);

    this.getSongQueue = this.getSongQueue.bind(this);
  }

  componentWillMount() {
  // componentDidMount() {
    this.props.fetchSongs()
    // .then(() => this.setState({ songs: this.props.songs }))
  }

  handlePlay() {
    this.props.receiveCurrentSong(song);
  }

  getSongQueue(songId) {
    let { songs } = this.props;
    let songIdx = 0;

    for (let i = 0; i < songs.length; i++) {
      if (songs[i].id === songId) {
        songIdx = i;
      }
    }

    const songQueue = songs.slice(songIdx).concat(songs.slice(0, songIdx));
    return songQueue;
    // this.props.updateQueue(songQueue);
  }
  
  render() {
    let songs = this.props.songs;
    if (!songs) return null;
    
    songs = this.props.songs.map( (song, idx) => {
      return (
        <SongIndexItemContainer
          key={song.id}
          song={song}
          type= "song_index"
          getSongQueue={this.getSongQueue(song.id)}
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