import * as PlaylistSongUtil from '../util/playlist_song_api_util';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

export const removePlaylistSong = (playlistSong) => ({
  type: REMOVE_PLAYLIST_SONG,
  playlistSongId: playlistSong.id
});


export const deletePlaylistSong = (id) => dispatch => (
  PlaylistSongUtil.deletePlaylistSong(id)
    .then( playlistSong => dispatch(removePlaylistSong(playlistSong)))
);