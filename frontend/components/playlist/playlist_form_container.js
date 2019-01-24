import React from 'react';
import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import { createPlaylist, fetchPlaylists } from '../../actions/playlist_actions';
import { closeModal } from '../../actions/modal_actions';

//DELETE
const mapStateToProps = (state) => ({
  modal: state.modal
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(PlaylistForm);