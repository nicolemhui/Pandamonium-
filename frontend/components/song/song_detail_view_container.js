import { connect } from 'react-redux';
import SongDetailView from './song_detail_view';
import { selectArtistId } from '../../reducers/selectors';

//returns array 

// const selectArtistId = (state, songId) => {
//   debugger
//   return Object.values(state.entities.artistSongs)
//     .filter(artistSong => artistSong.song_id === songId)
//     .map(artistSong => state.entities.artists[artistSong.artist_id])
// }

//same selector for album 
// const selectAlbum = (state, songId) => {
//   debugger
//   return Object.values(state.entities.albums)
//     .filter(album => artistSong.song_id === songId)
//     .map(artistSong => state.entities.artists[artistSong.artist_id])
// }


const mapStateToProps = (state, { song }) => {
  const artists = selectArtistId(state, song.id);

  // debugger
  return {
    song,
    artists
  }
}

export default connect(mapStateToProps, null)(SongDetailView);

