import SongIndexItem from './song_index_item';
import { setCurrentSong } from '../../actions/music_player_actions';
import { deletePlaylistSong } from '../../actions/playlist_song_actions';
import { openModal } from'../../actions/modal_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    //FIX ME
    currentSong: state.ui.musicPlayer.currentSong,
    type: "song_index",
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  deletePlaylistSong: (playlistId, songId) => dispatch(deletePlaylistSong(playlistId, songId)),
  openModal: (modal, songId) => dispatch(openModal(modal, songId)),
});

//old code
// const mapDispatchToProps = dispatch => ({
//   setCurrentSong: (song) => dispatch(setCurrentSong(song)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(SongIndexItem);