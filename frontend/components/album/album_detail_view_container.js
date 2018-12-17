import { connect } from 'react-redux';
import AlbumDetailView from './album_detail_view';
import { selectAlbumArtists } from '../../reducers/selectors';

//FIX ME !
const mapStateToProps = (state, { album }) => {
  const artists = selectAlbumArtists(state, album.id);
  // const albums = selectAlbum(state, song.album_id);
  
  return {
    album,
    artists,
    // albums
  };
};

export default connect(mapStateToProps, null)(AlbumDetailView);

