import { connect } from 'react-redux';
import SongToPlaylistForm from './song_to_playlist_form';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { createPlaylistSong } from '../../actions/playlist_song_actions';

const mapStateToProps = state => {
  return {
    songId: state.ui.modal.songId,
    modalType: state.ui.modal.modalType,
    playlists: Object.values(state.entities.playlists),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    createPlaylistSong: (playlistId, songId) => dispatch(createPlaylistSong(playlistId, songId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongToPlaylistForm);