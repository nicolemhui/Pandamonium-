import { 
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_PLAYLIST, 
  REMOVE_PLAYLIST,
  RECEIVE_SEARCHED_PLAYLISTS
} from '../actions/playlist_actions';
import merge from 'lodash/merge';

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_PLAYLISTS:
    if (action.payload.playlists === undefined) {
      return {};
    } else {
      return action.payload.playlists;
    }
    case RECEIVE_ALL_PLAYLISTS:
    case RECEIVE_PLAYLIST:
      return merge({}, state, action.payload.playlist);
    case REMOVE_PLAYLIST:
      let newState = merge({}, state);
      delete newState[action.payload.playlistId];
      return newState;
    default:
      return state;
  }
};

export default playlistsReducer;