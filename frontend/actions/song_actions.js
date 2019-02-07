import * as SongApiUtil from '../util/song_api_util';
export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";

export const receiveAllSongs = (payload) => ({
  type: RECEIVE_ALL_SONGS,
  payload
});

export const receiveSong = (payload) => ({
  type: RECEIVE_SONG,
  payload
});

export const fetchSongs = () => dispatch => (
  SongApiUtil.fetchSongs()
    .then(payload => dispatch(receiveAllSongs(payload)))
);

export const fetchSong = (id) => dispatch => (
  SongApiUtil.fetchSong(id)
    .then(payload => dispatch(receiveSong(payload)))
);

export const fetchSearchedSongs = (searchString) => dispatch => (
  SongApiUtil.fetchSearchedSongs(searchString)
    .then(payload => dispatch(receiveAllSongs(payload)))
);