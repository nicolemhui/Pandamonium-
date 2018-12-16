import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from '../actions/song_actions';
import merge from 'lodash/merge';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SONGS:
      if (action.payload.songs === undefined) return null;
      console.log("songs: " + action.payload.songs);

      return action.payload.songs;
      // return ({
      //   songs: action.payload.songs,
      //   artistSongs: action.payload.artistSongs
      // });
    case RECEIVE_SONG:
      return merge({}, state, action.payload.song);
    default:
      return state;
  }
};

export default songsReducer;