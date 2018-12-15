import SongIndex from './song_index';
import { connect } from 'react-redux';
import { fetchSongs } from '../../util/song_api_util';

const mapStateToProps = (state) => ({
  songs = state.songs,
  artists = state.artists,
  albums = state.albums
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);