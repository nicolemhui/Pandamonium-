import * as PlaylistSongUtil from '../util/playlist_song_api_util';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';
export const ADD_PLAYLIST_SONG = 'ADD_PLAYLIST_SONG';

export const receivePlaylistSong = (playlistSong) => ({
  type: ADD_PLAYLIST_SONG,
  playlistSong
});

export const removePlaylistSong = (playlistSong) => ({
  type: REMOVE_PLAYLIST_SONG,
  playlistSong
});

//thunk creators
export const createPlaylistSong = (playlistId, songId) => dispatch => (
  PlaylistSongUtil.createPlaylistSong(playlistId, songId)
    .then( playlistSong => dispatch(receivePlaylistSong(playlistSong)))
);

export const deletePlaylistSong = (playlistId, songId) => dispatch => (
  PlaylistSongUtil.deletePlaylistSong(playlistId, songId)
    .then( playlistSong => { 
      dispatch(removePlaylistSong(playlistSong))
    })
);