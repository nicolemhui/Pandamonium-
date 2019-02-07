import React from 'react';
import SongIndexItemContainer from './song_index_item_container';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);

    this.getSongQueue = this.getSongQueue.bind(this);
  }

  componentDidMount() {
    let { searchString } = this.props;

    if (this.props.searchString != undefined) {
      this.props.fetchSearchedSongs(searchString);
    } else {
      this.props.fetchSongs();
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchString != newProps.searchString) {
      this.props.fetchSearchedSongs(newProps.searchString);
    }
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
  }
  
  render() {
    let songs = this.props.songs;
    if (!songs) return null;

    let noResults;
    if (songs.length === 0) {
      noResults = <div className="no-search-content">
        <h1>Nothing to see...</h1>
      </div>
    } else {
      noResults = "";
    }
    
    songs = this.props.songs.map( (song, idx) => {
      return (
        <SongIndexItemContainer
          key={song.id}
          song={song}
          type={"song_index"}
          getSongQueue={this.getSongQueue(song.id)}
        />
      )
    });  
    
    return (
      <div className="song-item-container">
        {noResults}
        <ul className="song-list">
          {songs}
        </ul>
      </div>
    )
  }
}

export default SongIndex;