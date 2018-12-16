import AlbumIndex from './song_index';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = (state) => {
  const songs = state.entities.songs;
  const artists = state.entities.artists;
  const albums = state.entities.albums;


  // debugger
  return ({
    songs: Object.values(songs),
    artists: Object.values(artists),
    albums: Object.values(albums)
  })
};

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);