import * as PlaylistApiUtil from '../util/playlist_api_util';
export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const RECEIVE_SEARCHED_PLAYLISTS = "RECEIVE_SEARCHED_PLAYLISTS";

export const receiveAllPlaylists = (payload) => ({
  type: RECEIVE_ALL_PLAYLISTS,
  payload
});

export const receivePlaylist = (payload) => ({
  type: RECEIVE_PLAYLIST,
  payload
});

export const removePlaylist = () => ({
  type: REMOVE_PLAYLIST,
  playlistId: playlist.id
});

export const receiveSearchedPlaylists = (payload) => ({
  type: RECEIVE_SEARCHED_PLAYLISTS,
  payload
});

//thunk creators
export const fetchPlaylists = () => dispatch => (
  PlaylistApiUtil.fetchPlaylists()
    .then(payload => dispatch(receiveAllPlaylists(payload)))
);

export const fetchPlaylist = (id) => dispatch => (
  PlaylistApiUtil.fetchPlaylist(id)
    .then(payload => dispatch(receivePlaylist(payload)))
);

export const createPlaylist = (playlist) => dispatch => (
  PlaylistApiUtil.createPlaylist(playlist)
    .then(payload => dispatch(receivePlaylist(payload)))
);

export const deletePlaylist = (payload) => dispatch => (
  PlaylistApiUtil.deletePlaylist(payload)
    .then(payload => dispatch(removePlaylist(payload)))
);

export const fetchSearchedPlaylists = (searchString) => dispatch => (
  PlaylistApiUtil.fetchSearchedPlaylists(searchString)
    .then(payload => dispatch(receiveSearchedPlaylists(payload)))
);

