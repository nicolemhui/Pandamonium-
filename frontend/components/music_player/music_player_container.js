import MusicPlayer from './music_player';
import { connect } from 'react-redux';
import { setCurrentSong, toggleSong } from '../../actions/music_player_actions';

const mapStateToProps = state => {
  return {
    currentSong: state.ui.musicPlayer.currentSong,
    isPlaying: state.ui.musicPlayer.isPlaying,
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  toggleSong: () => dispatch(toggleSong()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);