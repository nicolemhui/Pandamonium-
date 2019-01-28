import MusicPlayer from './music_player';
import { connect } from 'react-redux';
import { setCurrentSong, toggleSong, playNextSong, playPreviousSong } from '../../actions/music_player_actions';

const mapStateToProps = state => {
  return {
    currentSong: state.ui.musicPlayer.currentSong,
    isPlaying: state.ui.musicPlayer.isPlaying,
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  toggleSong: () => dispatch(toggleSong()),
  playNextSong: () => dispatch(playNextSong()),
  playPreviousSong: () => dispatch(playPreviousSong()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);