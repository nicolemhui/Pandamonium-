import Volume from './volume';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    // currentSong: state.ui.musicPlayer.currentSong,
    isPlaying: state.ui.musicPlayer.isPlaying,
  }
};

// const mapDispatchToProps = dispatch => ({

// });

export default connect(mapStateToProps, null)(Volume);