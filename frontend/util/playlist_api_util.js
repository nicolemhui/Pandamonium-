export const fetchPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/playlists'
  })
);

export const fetchPlaylist = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`
  })
);

export const createPlaylist = (playlist) => (
  $.ajax({
    method: 'POST',
    url: 'api/playlists',
    data: { playlist }
  })
);

export const deletePlaylist = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${id}`,
  })
);

export const fetchSearchedPlaylists = (searchString) => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/search/${searchString}`,
  })
);

export const fetchSavedPlaylists = () => (
  $.ajax({
    url: 'api/playlists/saved_playlists',
    method: 'GET'
  })
);