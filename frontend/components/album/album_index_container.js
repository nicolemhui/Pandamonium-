import AlbumIndex from './album_index';
import { connect } from 'react-redux';
import { fetchAlbums, fetchSearchedAlbums, fetchSavedAlbums } from '../../actions/album_actions';

const mapStateToProps = (state) => {
  const albums = state.entities.albums;
  const artistAlbums = state.entities.artistAlbums;

  return {
    albums: Object.values(albums),
    artistAlbums: Object.values(artistAlbums)
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchSavedAlbums: () => dispatch(fetchSavedAlbums()),
    fetchSearchedAlbums: (searchString) => dispatch(fetchSearchedAlbums(searchString)),
  });
  
  
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);

