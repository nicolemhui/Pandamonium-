import React from 'react';
import SongIndexItemContainer from './song_index_item_container';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
  display: block;
  margin: 0 auto;
`;

class SongIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.getSongQueue = this.getSongQueue.bind(this);
  }

  componentDidMount() {
    let { searchString } = this.props;

    if (this.props.searchString != undefined) {
      this.setState({ loading: false });
      this.props.fetchSearchedSongs(searchString);
    } else {
      this.props.fetchSongs()
        .then(() => window.setTimeout(() => this.setState({ loading: false }), 700));
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchString != newProps.searchString) {
      this.setState({ loading: false });
      this.props.fetchSearchedSongs(newProps.searchString);
    }
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

    if (this.state.loading) {
      return (
        <div className='loading-spinner'>
          <BeatLoader
            css={override}
            sizeUnit={"px"}
            size={20}
            color={'#1DB954'}
            loading={this.state.loading}
          />
        </div> 
    )};

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
        <ul className="song-list">
          {songs}
        </ul>
      </div>
    )
  }
}

export default SongIndex;