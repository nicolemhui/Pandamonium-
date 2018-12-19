import React from 'react';
import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist } from '../../actions/artist_actions';

import { selectArtistAlbums, selectArtistSongs } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const artistId = ownProps.match.params.artistId;
  const artist = state.entities.artists[artistId];

  const artistAlbums = selectArtistAlbums(state, parseInt(artistId));
  const artistSongs = selectArtistSongs(state, parseInt(artistId));

  return ({
    artist: artist,
    artistAlbums: artistAlbums,
    artistSongs: artistSongs,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchArtist: (id) => dispatch(fetchArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);


