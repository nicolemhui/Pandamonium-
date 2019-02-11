import SongIndex from './song_index';
import { connect } from 'react-redux';
import { fetchSongs, fetchSearchedSongs } from '../../actions/song_actions';
import { updateQueue } from '../../actions/music_player_actions';

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
  fetchSearchedSongs: (searchString) => dispatch(fetchSearchedSongs(searchString)),
  // fetchSearchedSongs: (searchString) => dispatch(fetchSearchedSongs(searchString)).then(res => console.log("api response", res)),

  updateQueue: (queue) => dispatch(updateQueue(queue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);