import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_ALL_SONGS } from '../actions/song_actions';
import merge from 'lodash/merge';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ARTISTS:
      //FIX ME !!
      return action.payload.artists;
    case RECEIVE_ALL_SONGS: 
      return action.payload.artists;
    case RECEIVE_ARTIST:
      return merge({}, state, action.artist)
    default:
      return state;
  }
};

export default artistsReducer;