import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';
import merge from 'lodash/merge';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ARTISTS:
      return action.artists.artists;
    case RECEIVE_ARTIST:
      return merge({}, state, action.artist)
    default:
      return state;
  }
};

export default artistsReducer;