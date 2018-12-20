export const createPlaylistSong = (playlistId, songId) => (
  $.ajax ({
    method: 'POST',
    url: `api/playlists/${playlistId}/song/${songId}`
  })
);

export const deletePlaylistSong = (id) => (
  $.ajax ({
    method: 'DELETE',
    url: `api/playlist_songs/${id}`
  })
);