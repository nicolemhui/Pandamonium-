import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from '../actions/song_actions';
import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

import merge from 'lodash/merge';

const artistSongsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SONGS:
    case RECEIVE_ALL_ARTISTS:
    case RECEIVE_PLAYLIST:
      return action.payload.artistSongs;
    case RECEIVE_SONG:
    case RECEIVE_ARTIST:
      return merge({}, state, action.payload.artistSongs)
    default:
      return state;
  }
};

export default artistSongsReducer;