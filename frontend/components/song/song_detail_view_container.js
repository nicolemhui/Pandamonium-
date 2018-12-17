import { connect } from 'react-redux';
import SongDetailView from './song_detail_view';
import { selectSongArtists, selectSongAlbums } from '../../reducers/selectors';

//returns array 

// export const selectAlbum = (state, songAlbumId) => {
//   return Object.values(state.entities.albums)
//     .filter(album => album.id === songAlbumId);
//     // .map(album => state.entities.albums[album.album_id]);
// };


const mapStateToProps = (state, { song }) => {
  const artists = selectSongArtists(state, song.id);
  const albums = selectSongAlbums(state, song.album_id);

  return {
    song,
    artists,
    albums
  };
};

export default connect(mapStateToProps, null)(SongDetailView);

