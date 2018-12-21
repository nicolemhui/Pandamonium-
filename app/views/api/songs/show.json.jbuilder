json.song do
  json.partial! 'api/songs/song', song: @song 
end 

json.albums ({})
json.albums do 
  json.partial! 'api/albums/album', album: @song.album
end 

json.artists do 
  artists = @song.artists 
  artists.each do |artist|
    json.partial! 'api/artists/artist', artist: artist
  end 
end 

json.artistSongs do
  @song.artist_songs.each do |artist_song|
    json.partial! 'api/artist_songs/artist_song', artist_song: artist_song
  end
end

json.artistAlbums do 
  @song.artists.each do |artist|
    artist.artist_albums.each do |artist_album|
      json.partial! 'api/artist_albums/artist_album', artist_album: artist_album
    end 
  end 
end 