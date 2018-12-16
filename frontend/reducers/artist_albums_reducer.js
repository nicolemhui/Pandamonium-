import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from '../actions/song_actions';
import merge from 'lodash/merge';

const artistAlbumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
    case RECEIVE_ALL_SONGS:
      return action.payload.artistAlbums;
    case RECEIVE_ALBUM:
      return merge({}, state, action.payload.artistAlbums)
    default:
      return state;
  }
};

export default artistAlbumsReducer;