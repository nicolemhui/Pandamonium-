import { 
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_PLAYLIST, 
  REMOVE_PLAYLIST 
} from '../actions/playlist_actions';
import merge from 'lodash/merge';

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      // if (action.payload.playlists === undefined) return null;
      return action.payload.playlists;
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