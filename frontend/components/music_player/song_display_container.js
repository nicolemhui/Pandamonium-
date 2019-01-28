import SongDisplay from './song_display';
import { connect } from 'react-redux';
import { selectSongArtists, selectSongAlbums, selectAlbumArtists } from '../../reducers/selectors';

const mapStateToProps = state => {
  const currentSong = state.ui.musicPlayer.currentSong;
  const albums = selectSongAlbums(state, currentSong.album_id);
  const artists = selectSongArtists(state, currentSong.id);
  const albumArtists = selectAlbumArtists(state, currentSong.album_id);

  return {
    currentSong,
    albums,
    artists,
    albumArtists
  };
};

export default connect(mapStateToProps, null)(SongDisplay);




// const mapStateToProps = (state, ownProps) => {
//   const currentSongIdx = state.ui.musicPlayer.currentSongIndex;
//   const currentSong = state.ui.musicPlayer.trackList[currentSongIdx];

//   if (currentSong) {
//     const currentSongAlbum = state.entities.albums[currentSong.albumId];
//     const currentSongArtist = state.entities.artists[currentSong.artistId];
//     return ({
//       currentSong,
//       currentSongAlbum,
//       currentSongArtistName: currentSongArtist.name
//     });
//   } else {
//     return ({
//       currentSong: undefined,
//       currentSongAlbum: undefined,
//       currentSongArtistName: undefined
//     });
//   }

// };