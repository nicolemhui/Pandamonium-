import React from 'react';
import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, deletePlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  let playlistId = ownProps.match.params.playlistId;
  let playlist = state.entities.playlists[playlistId];

  return ({
    debugger
    playlist: playlist,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  deletePlaylist: (id) => dispatch(deletePlaylist(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);