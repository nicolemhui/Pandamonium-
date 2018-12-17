import SongIndex from './song_index';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = (state) => {
  const songs = state.entities.songs;
  const artistSongs = state.entities.artistSongs;

  return { 
    songs: Object.values(songs),
    artistSongs: Object.values(artistSongs)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);