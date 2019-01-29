import Volume from './volume';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isPlaying: state.ui.musicPlayer.isPlaying,
  };
};

export default connect(mapStateToProps, null)(Volume);