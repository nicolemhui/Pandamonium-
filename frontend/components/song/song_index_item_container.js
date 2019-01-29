import SongIndexItem from './song_index_item';
import { setCurrentSong, toggleSong, updateQueue } from '../../actions/music_player_actions';
import { deletePlaylistSong } from '../../actions/playlist_song_actions';
import { openModal } from'../../actions/modal_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentSong: state.ui.musicPlayer.currentSong,
    isPlaying: state.ui.musicPlayer.isPlaying,
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  toggleSong: () => dispatch(toggleSong()),
  deletePlaylistSong: (playlistId, songId) => dispatch(deletePlaylistSong(playlistId, songId)),
  openModal: (modal, songId) => dispatch(openModal(modal, songId)),
  updateQueue: (queue) => dispatch(updateQueue(queue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongIndexItem);