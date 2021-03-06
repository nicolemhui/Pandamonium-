import React from 'react';
import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, deletePlaylist } from '../../actions/playlist_actions';
import { deletePlaylistSong } from '../../actions/playlist_song_actions';
import { selectPlaylistSongs} from '../../reducers/selectors';
import { setCurrentSong, toggleSong, updateQueue } from '../../actions/music_player_actions';

const mapStateToProps = (state, ownProps) => {
  let userId = state.session.id;

  let playlistId = ownProps.match.params.playlistId;
  let playlist = state.entities.playlists[playlistId];

  let playlistSongs = selectPlaylistSongs(state, parseInt(playlistId));

  return ({
    playlist,
    playlistSongs,
    userId,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  deletePlaylist: (id) => dispatch(deletePlaylist(id)),
  deletePlaylistSong: (playlistId, songId) => dispatch(deletePlaylistSong(playlistId, songId)),
  updateQueue: (queue) => dispatch(updateQueue(queue)),
  setCurrentSong: (song, idx) => dispatch(setCurrentSong(song, idx)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);