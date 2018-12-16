// associate artist with specific song within a container (probably songs index item)

export const selectArtistId = (state, songId) => {
  return Object.values(state.entities.artistSongs)
    .filter(artistSong => artistSong.song_id === songId)
    .map(artistSong => state.entities.artists[artistSong.artist_id])
}