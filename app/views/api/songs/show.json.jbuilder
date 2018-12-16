json.song do
  json.partial! 'api/songs/song', song: @song 
end 

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