import React from 'react';
import SongIndexItem from './song_index_item';
import { fetchSongs } from '../../actions/song_actions';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchSongs()
    // .then(() => this.setState({ songs: this.props.songs }))
  }

  render() {
    const songs = this.props.songs.map( song => {
      return (
        <SongIndexItem
          key={song.id}
          song={song}
        />
      )
    });

    return (
      <div className="songs-main">
        <ul className="song-list">
          {songs}
        </ul>
      </div>
    )
  }
}

export default SongIndex;