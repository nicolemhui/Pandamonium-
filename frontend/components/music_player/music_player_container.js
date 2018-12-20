import React from 'react';
import MusicPlayer from './music_player';
import { connect } from 'react-redux';
import { setCurrentSong } from '../../actions/music_player_actions';

const mapStateToProps = state => {
  debugger
  return {
    currentSong: state.entities.ui.musicPlayer.currentSong,
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);