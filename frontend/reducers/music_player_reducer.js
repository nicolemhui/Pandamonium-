import merge from 'lodash/merge';
import { RECEIVE_CURRENT_SONG, TOGGLE_SONG, ADD_SONG_TO_QUEUE, UPDATE_QUEUE, PLAY_NEXT_SONG } from '../actions/music_player_actions';

const initialState = {
  currentSong: {},
  isPlaying: false,
  songQueue: [],
  currentSongIdx: 0,
}

export default function musicPlayerReducer(state = initialState, action) {
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      newState.currentSongIdx = action.songIdx;
      newState.currentSong = action.song;
      newState.isPlaying = true;
      return newState;
    case TOGGLE_SONG:
      newState.isPlaying = (newState.isPlaying === false) ? true : false;
      return newState;
    case ADD_SONG_TO_QUEUE:
      newState.songQueue.push(action.song);
      return newState;
    case UPDATE_QUEUE:
      let newSongQueue = action.songs;   
      // debugger;

      newState = merge({}, state, {
        currentSong: newSongQueue[0],
        isPlaying: true,
        songQueue: newSongQueue
      });
      return newState;
    case PLAY_NEXT_SONG:
      let nextSongIdx = (state.currentSongIdx + 1) % state.songQueue.length;
      let currentSong = songQueue[nextSongIdx];
      newState = merge({}, state, {
        currentSong: currentSong,
        currentSongIdx: nextSongIdx
      });
      return newState;
    default:
      return state;
  }
}

//if last song then set isPlaying to false 
// use mod only if you want repeat 