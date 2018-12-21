import merge from 'lodash/merge';
import { RECEIVE_CURRENT_SONG } from '../actions/music_player_actions';

// STATE: 

// musicPlayer {
//   currentSong: { song object},
//   isPlaying: false,
// }

const initialState = {
  currentSong: {},
  isPlaying: false,
}

export default function musicPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      let newState = merge({}, state);
      newState.currentSong = action.song;
      newState.isPlaying = true;
      return newState;
    default:
      return state;
  }
}