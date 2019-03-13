export const fetchAlbums = () => (
  $.ajax ({
    method: 'GET',
    url: 'api/albums'
  })
);

export const fetchAlbum = (id) => (
  $.ajax ({
    method: 'GET',
    url: `api/albums/${id}`
  })
);

export const fetchSearchedAlbums = (searchString) => (
  $.ajax ({
    method: 'GET',
    url: `api/albums/search/${searchString}`
  })
);

export const fetchSavedAlbums = () => (
  $.ajax({
    url: 'api/albums/saved_albums',
    method: 'GET'
  })
);