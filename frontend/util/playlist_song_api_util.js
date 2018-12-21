export const createPlaylistSong = (playlistId, songId) => (
  $.ajax ({
    method: 'POST',
    url: `api/playlists/${playlistId}/song/${songId}`
  })
);

export const deletePlaylistSong = (playlistId, songId) => (
  $.ajax ({
    method: 'DELETE',
    url: `api/playlists/${playlistId}/song/${songId}`
  })
);