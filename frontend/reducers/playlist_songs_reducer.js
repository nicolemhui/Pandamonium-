import {
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_PLAYLIST,
} from '../actions/playlist_actions';

import { ADD_PLAYLIST_SONG, REMOVE_PLAYLIST_SONG } from '../actions/playlist_song_actions';
import merge from 'lodash/merge';

const playlistSongsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return action.payload.playlistSongs;
    case RECEIVE_PLAYLIST:
      return merge({}, state, action.payload.playlistSongs)
    case ADD_PLAYLIST_SONG:
      return merge({}, state, action.playlistSong)
    case REMOVE_PLAYLIST_SONG:
      let newState = merge({}, state);
      delete newState[action.playlistSongId];
      return newState;
    default:
      return state;
  }
};

export default playlistSongsReducer;