import { connect } from 'react-redux';
import AlbumDetailView from './album_detail_view';
import { selectAlbumArtists } from '../../reducers/selectors';

const mapStateToProps = (state, { album }) => {
  const artists = selectAlbumArtists(state, album.id);
  
  return {
    album,
    artists,
  };
};

export default connect(mapStateToProps, null)(AlbumDetailView);

