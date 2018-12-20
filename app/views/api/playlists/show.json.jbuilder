json.playlist do 
  json.partial! 'api/playlists/playlist', playlist: @playlist
end 

json.playlistSongs do 
  @playlist.playlist_songs.each do |playlist_song|
    json.partial! 'api/playlist_songs/playlist_song', playlist_song: playlist_song
  end 
end 

json.songs ({})
json.songs do |song|
  @playlist.songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end 
end 

json.albums ({})
json.albums do 
  @playlist.songs.each do |song|
    json.partial! 'api/albums/album', album: song.album
  end 
end 

json.artists ({})
json.artists do 
  @playlist.songs.each do |song|
    song.artists.each do |artist|
      json.partial! 'api/artists/artist', artist: artist
    end 
  end 
end 

json.artistSongs do
  @playlist.songs.each do |song|
    song.artist_songs.each do |artist_song|
      json.partial! 'api/artist_songs/artist_song', artist_song: artist_song
    end
  end 
end

json.artistAlbums do 
  @playlist.songs.each do |song|
    song.artists.each do |artist|
      artist.artist_albums.each do |artist_album|
        json.partial! 'api/artist_albums/artist_album', artist_album: artist_album
      end 
    end 
  end 
end 
