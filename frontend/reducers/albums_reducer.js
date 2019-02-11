import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM, RECEIVE_SEARCHED_ALBUMS } from '../actions/album_actions';
import { RECEIVE_ALL_SONGS } from '../actions/song_actions';
import { RECEIVE_PLAYLIST, RECEIVE_ALL_PLAYLISTS } from '../actions/playlist_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCHED_ALBUMS:
      if (action.payload.albums === undefined) {
        return {};
      } else {
        return action.payload.albums;
      }
    case RECEIVE_ALL_ALBUMS:
    case RECEIVE_ALL_SONGS:
    case RECEIVE_PLAYLIST:
    case RECEIVE_ARTIST:
    case RECEIVE_ALL_PLAYLISTS:
      return merge({}, state, action.payload.albums);
    case RECEIVE_ALBUM:
      return merge({}, state, action.payload.album);
    default: 
      return state;
  }
};

export default albumsReducer;