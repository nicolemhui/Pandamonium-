import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumShow from './album_show';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { selectAlbumArtists, selectAlbumSongs } from '../../reducers/selectors';
import { setCurrentSong, updateQueue } from '../../actions/music_player_actions';

const mapStateToProps = (state, ownProps) => {
  const albumId = ownProps.match.params.albumId;
  const album = state.entities.albums[albumId];
  const artists = state.entities.artists;

  const albumArtists = selectAlbumArtists(state, parseInt(albumId));
  
  // debugger;

  const albumSongs = selectAlbumSongs(state, parseInt(albumId));

  return ({
    album,
    albumArtists,
    albumSongs,
    artists,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  updateQueue: (queue) => dispatch(updateQueue(queue)),
  setCurrentSong: (song, idx) => dispatch(setCurrentSong(song, idx)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumShow));


