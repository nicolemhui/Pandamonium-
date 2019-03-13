export const fetchSongs = () => (
  $.ajax({
    method: 'GET',
    url: 'api/songs'
  })
);

export const fetchSong = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/songs/${id}`
  })
);

export const fetchSearchedSongs = (searchString) => (
  $.ajax({
    method: 'GET',
    url: `api/songs/search/${searchString}`
  })
);

export const fetchSavedSongs = () => (
  $.ajax({
    url: 'api/songs/saved_songs',
    method: 'GET'
  })
);