import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs_reducer';
import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';
import artistSongsReducer from './artist_songs_reducer';
import artistAlbumsReducer from './artist_albums_reducer';
import playlistsReducer from './playlist_reducer';
import playlistSongsReducer from './playlist_songs_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  artists: artistsReducer,
  albums: albumsReducer,
  artistSongs: artistSongsReducer,
  artistAlbums: artistAlbumsReducer,
  playlists: playlistsReducer,
  playlistSongs: playlistSongsReducer,
});

export default entitiesReducer;