import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST, RECEIVE_SEARCHED_ARTISTS } from '../actions/artist_actions';
import { RECEIVE_ALL_SONGS } from '../actions/song_actions';
import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_PLAYLIST, RECEIVE_ALL_PLAYLISTS } from '../actions/playlist_actions';

import merge from 'lodash/merge';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_ARTISTS:
    if (action.payload.artists === undefined) {
      return {};
    } else {
      return action.payload.artists;
    }
    case RECEIVE_ALL_ARTISTS:
      return action.payload.artists;
    case RECEIVE_ALL_ALBUMS:
    case RECEIVE_ALL_SONGS: 
    case RECEIVE_PLAYLIST:
    case RECEIVE_ALL_PLAYLISTS:
    case RECEIVE_ALBUM:
      return merge({}, state, action.payload.artists);
    case RECEIVE_ARTIST:
      return merge({}, state, action.payload.artist)
    default:
      return state;
  }
};

export default artistsReducer;