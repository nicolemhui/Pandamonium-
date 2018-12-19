import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ALL_SONGS} from '../actions/song_actions';
import { RECEIVE_PLAYLIST} from '../actions/playlist_actions';
import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ALBUMS:
    case RECEIVE_ALL_SONGS:
    case RECEIVE_PLAYLIST:
      return merge({}, state, action.payload.albums);
    case RECEIVE_ALBUM:
      return merge({}, state, action.payload.album);
    default: 
      return state;
  }
};

export default albumsReducer;