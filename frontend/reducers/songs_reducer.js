import { RECEIVE_ALL_SONGS, RECEIVE_SONG, RECEIVE_SEARCHED_SONGS } from '../actions/song_actions';
import { RECEIVE_PLAYLIST, RECEIVE_ALL_PLAYLISTS } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';
import merge from 'lodash/merge';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_SONGS:
      if (action.payload.songs === undefined) {
        return {};
      } else {
        return action.payload.songs;
      }
    case RECEIVE_ALL_SONGS:
      return action.payload.songs;
    case RECEIVE_PLAYLIST:
    case RECEIVE_ALBUM:
    case RECEIVE_ARTIST:
    case RECEIVE_ALL_ARTISTS:
    case RECEIVE_ALL_PLAYLISTS:
      return merge({}, state, action.payload.songs);
    case RECEIVE_SONG:
      return merge({}, state, action.payload.song);
    default:
      return state;
  }
};

export default songsReducer;