import {
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_PLAYLIST,
} from '../actions/playlist_actions';

import merge from 'lodash/merge';

const playlistSongsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return action.payload.playlistSongs;
    case RECEIVE_PLAYLIST:
      return merge({}, state, action.payload.playlistSongs)
    default:
      return state;
  }
};

export default playlistSongsReducer;