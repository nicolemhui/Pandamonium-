export const deletePlaylistSong = (id) => (
  $.ajax ({
    method: 'DELETE',
    url: `api/playlist_songs/${id}`
  })
);