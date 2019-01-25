import PlaylistIndex from './playlist_index';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
  const playlists = state.entities.playlists;

  return {
    playlists: Object.values(playlists),
    modalType: state.ui.modal.modalType,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);

