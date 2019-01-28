import MusicPlayer from './music_player';
import { connect } from 'react-redux';
import { setCurrentSong, toggleSong, loopSong, playNextSong, playPreviousSong, updateQueue } from '../../actions/music_player_actions';

const mapStateToProps = state => {
  return {
    currentSong: state.ui.musicPlayer.currentSong,
    isPlaying: state.ui.musicPlayer.isPlaying,
    songQueue: state.ui.musicPlayer.songQueue,
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  toggleSong: () => dispatch(toggleSong()),
  loopSong: () => dispatch(loopSong()),
  playNextSong: () => dispatch(playNextSong()),
  playPreviousSong: () => dispatch(playPreviousSong()),
  updateQueue: (queue) => dispatch(updateQueue(queue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);