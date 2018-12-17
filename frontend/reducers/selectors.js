// associate artist with specific song within a container (probably songs index item)
export const selectSongArtists = (state, songId) => {
  return Object.values(state.entities.artistSongs)
    .filter(artistSong => artistSong.song_id === songId)
    .map(artistSong => state.entities.artists[artistSong.artist_id])
}

//return selected album from artist id
export const selectSongAlbums = (state, songAlbumId) => {
  return Object.values(state.entities.albums)
    .filter(album => album.id === songAlbumId);
};

// associate artist with specific song within a container (probably songs index item)
export const selectAlbumArtists = (state, albumId) => {
  return Object.values(state.entities.artistAlbums)
    .filter(artistAlbum => artistAlbum.album_id === albumId)
    .map(artistAlbum => state.entities.artists[artistAlbum.artist_id])
};

// return songs belonging to specific album through song.album_id
export const selectAlbumSongs = (state, albumId) => {
  return Object.values(state.entities.songs)
    .filter(song => song.album_id === albumId)
    // .map(artistAlbum => state.entities.albums[artistAlbum.album_id])
}