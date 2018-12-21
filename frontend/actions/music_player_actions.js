export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const TOGGLE_SONG = 'TOGGLE_SONG';

export const setCurrentSong = (song) => ({
  type: RECEIVE_CURRENT_SONG,
  song
});

export const toggleSong = () => ({
  type: TOGGLE_SONG,
});

