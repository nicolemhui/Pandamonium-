import AlbumIndex from './album_index';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = (state) => {
  const albums = state.entities.albums;
  const artistAlbums = state.entities.artistAlbums;

  return {
    albums: Object.values(albums),
    artistAlbums: Object.values(artistAlbums)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);

