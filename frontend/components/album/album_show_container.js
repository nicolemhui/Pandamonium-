import React from 'react';
import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchAlbum } from '../../actions/album_actions';
import { selectAlbumArtists, selectAlbumSongs } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const albumId = ownProps.match.params.albumId;
  const album = state.entities.albums[albumId];

  const albumArtists = selectAlbumArtists(state, parseInt(albumId));
  const albumSongs = selectAlbumSongs(state, parseInt(albumId));

  return ({
    album: album,
    albumArtists: albumArtists,
    albumSongs: albumSongs,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: (id) => dispatch(fetchAlbum(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);

