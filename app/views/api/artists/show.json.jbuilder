json.artist do 
  json.partial! 'api/artists/artist', artist: @artist 
end 

json.albums ({})
json.albums do 
  albums = @artist.albums
  albums.each do |album|
    json.partial! 'api/albums/album', album: album
  end 
end 

json.songs ({})
json.songs do 
  songs = @artist.songs 
  songs.each do |song|
    json.partial! 'api/songs/song', song: song 
  end 
end 

json.artistSongs ({})
json.artistSongs do 
  @artist.artist_songs.each do |artist_song|
    json.partial! 'api/artist_songs/artist_song', artist_song: artist_song
  end
end 

json.artistAlbums ({})
json.artistAlbums do 
  @artist.artist_albums.each do |artist_album|
    json.partial! 'api/artist_albums/artist_album', artist_album: artist_album
  end 
end 