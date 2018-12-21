import merge from 'lodash/merge';
import { RECEIVE_CURRENT_SONG, TOGGLE_SONG} from '../actions/music_player_actions';

const initialState = {
  currentSong: {},
  isPlaying: false,
}

export default function musicPlayerReducer(state = initialState, action) {
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      newState.currentSong = action.song;
      newState.isPlaying = true;
      return newState;
    case TOGGLE_SONG:
      newState.isPlaying = (newState.isPlaying === false) ? true : false;
      return newState;
    default:
      return state;
  }
}