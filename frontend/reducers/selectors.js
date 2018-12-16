// associate artist with specific song within a container (probably songs index item)

export const selectArtistId = (state, songId) => {
  return Object.values(state.entities.artistSongs)
    .filter(artistSong => artistSong.song_id === songId)
    .map(artistSong => state.entities.artists[artistSong.artist_id])
}

export const selectAlbum = (state, artistId) => {
  return Object.values(state.entities.artistAlbums)
    .filter(artistAlbum => artistAlbum.artist_id === artistId)
    .map(artistAlbum => state.entities.albums[artistAlbum.album_id])
}