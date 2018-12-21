import React from 'react';
import MusicPlayer from './music_player';
import { connect } from 'react-redux';
import { setCurrentSong } from '../../actions/music_player_actions';

const mapStateToProps = state => {
  return {
    currentSong: state.ui.musicPlayer.currentSong,
    isPlaying: state.ui.musicPlayer.isPlaying,
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);