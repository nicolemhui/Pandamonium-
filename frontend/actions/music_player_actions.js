export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const TOGGLE_SONG = 'TOGGLE_SONG';
export const LOOP_SONG = 'LOOP_SONG';
export const ADD_SONG_TO_QUEUE = 'ADD_SONG_TO_QUEUE';
export const UPDATE_QUEUE = 'UPDATE_QUEUE';
export const PLAY_NEXT_SONG = 'PLAY_NEXT_SONG';
export const PLAY_PREVIOUS_SONG = 'PLAY_PREVIOUS_SONG';

export const setCurrentSong = (song, songIdx = 0) => ({
  type: RECEIVE_CURRENT_SONG,
  songIdx,
  song
});

export const toggleSong = () => ({
  type: TOGGLE_SONG,
});

export const loopSong = () => ({
  type: LOOP_SONG,
});

export const addSongToQueue = (song) => ({
  type: ADD_SONG_TO_QUEUE,
  song
});

export const updateQueue = (songs) => ({
  type: UPDATE_QUEUE,
  songs
});

export const playNextSong = () => ({
  type: PLAY_NEXT_SONG,
});

export const playPreviousSong = () => ({
  type: PLAY_PREVIOUS_SONG,
});
