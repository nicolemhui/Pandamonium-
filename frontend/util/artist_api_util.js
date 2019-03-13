export const fetchArtists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/artists'
  })
);

export const fetchArtist = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/artists/${id}`
  })
);

export const fetchSearchedArtists = (searchString) => (
  $.ajax({
    method: 'GET',
    url: `api/artists/search/${searchString}`
  })
);

export const fetchSavedArtists = () => (
  $.ajax({
    url: 'api/artists/saved_artists',
    method: 'GET'
  })
);