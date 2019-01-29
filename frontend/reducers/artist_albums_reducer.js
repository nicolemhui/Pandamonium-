import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from '../actions/song_actions';
import { RECEIVE_PLAYLIST, RECEIVE_ALL_PLAYLISTS } from '../actions/playlist_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

import merge from 'lodash/merge';

const artistAlbumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
    case RECEIVE_ALL_SONGS:
    case RECEIVE_PLAYLIST:
    case RECEIVE_ARTIST:
    case RECEIVE_ALBUM:
    case RECEIVE_ALL_PLAYLISTS:
      return merge({}, state, action.payload.artistAlbums);
    default:
      return state;
  }
};

export default artistAlbumsReducer;