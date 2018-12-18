import React from 'react';
import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import { createPlaylist } from '../../actions/playlist_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  modal: state.modal
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(PlaylistForm);