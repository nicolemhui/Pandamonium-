json.album do 
  json.partial! 'api/albums/album', album: @album 
end 

json.artists do 
  artists = @album.artists 
  artists.each do |artist|
    json.partial! 'api/artists/artist', artist: artist
  end 
end 

json.songs do 
  songs = @album.songs
  songs.each do |song|
    json.partial! 'api/songs/song', song: song 
  end 
end 
