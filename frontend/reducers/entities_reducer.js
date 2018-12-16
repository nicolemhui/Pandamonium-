import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs_reducer';
import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';
import artistSongsReducer from './artist_songs_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  artists: artistsReducer,
  albums: albumsReducer,
  artistSongs: artistSongsReducer,
});

export default entitiesReducer;