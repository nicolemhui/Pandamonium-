import { connect } from 'react-redux';
import SongDetailView from './song_detail_view';
import { selectSongArtists, selectSongAlbums } from '../../reducers/selectors';

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

