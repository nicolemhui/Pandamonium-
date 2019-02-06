import PlaylistIndex from './playlist_index';
import { connect } from 'react-redux';
import { fetchPlaylists, fetchSearchedPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
  const playlists = state.entities.playlists;
  const songs = state.entities.songs;

  return {
    playlists: Object.values(playlists),
    modalType: state.ui.modal.modalType,
    songs: Object.values(songs),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchSearchedPlaylists: (searchString) => dispatch(fetchSearchedPlaylists(searchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);

