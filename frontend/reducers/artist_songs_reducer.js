import {
  RECEIVE_ALL_SONGS,
  RECEIVE_SONG
} from '../actions/song_actions';
import merge from 'lodash/merge';

const artistSongsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_SONGS:
      console.log("artistSongs: " + action.payload.artistSongs);
      return action.payload.artistSongs;
    case RECEIVE_SONG:
      return merge({}, state, action.payload.artistSongs)
    default:
      return state;
  }
};

export default artistSongsReducer;