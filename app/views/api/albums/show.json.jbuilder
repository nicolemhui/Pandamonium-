json.album do 
  json.partial! 'api/albums/album', album: @album
end 

json.artists do 
  artists = @album.artists 
  artists.each do |artist|
    json.partial! 'api/artists/artist', artist: artist
  end 
end 

json.songs ({})
json.songs do 
  songs = @album.songs
  songs.each do |song|
    json.partial! 'api/songs/song', song: song 
  end 
end 

json.artistSongs ({})
json.artistSongs do 
  @album.artists.each do |artist|
    artist.artist_songs.each do |artist_song|
      json.partial! 'api/artist_songs/artist_song', artist_song: artist_song
    end 
  end 
end