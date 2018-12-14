import * as SongApiUtil from '../util/song_api_util';
export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";

export const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});

export const fetchSongs = () => dispatch => (
  SongApiUtil.fetchSongs()
    .then(songs => dispatch(receiveAllSongs(songs)))
);

export const fetchSong = (id) => dispatch => (
  SongApiUtil.fetchSong(id)
    .then(song => dispatch(receiveSong(song)))
);