import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ALL_SONGS} from '../actions/song_actions';
import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ALBUMS:
      //FIX ME!
      return action.albums.albums;
    case RECEIVE_ALL_SONGS:
      return action.payload.albums;
    case RECEIVE_ALBUM:
      return merge({}, state, action.album)
    default: 
      return state;
  }
};

export default albumsReducer;