import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from '../actions/song_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import merge from 'lodash/merge';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SONGS:
    case RECEIVE_PLAYLIST:
    case RECEIVE_ALBUM:
    case RECEIVE_ARTIST:
      if (action.payload.songs === undefined) return null;
      return action.payload.songs;
      // return merge({}, state, action.payload.songs);
    case RECEIVE_SONG:
      return merge({}, state, action.payload.song);
    default:
      return state;
  }
};

export default songsReducer;