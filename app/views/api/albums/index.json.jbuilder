json.albums do 
  @albums.each do |album| 
    json.partial! 'api/albums/album', album: album 
  end 
end 

json.songs do 
  @albums.each do |album|
    songs = album.songs
    songs.each do |song|
      json.partial! 'api/songs/song', song: song 
    end 
  end 
end 

json.artists do 
  @albums.each do |album|
    artists = album.artists 
    artists.each do |artist|
      json.partial! 'api/artists/artist', artist: artist
    end 
  end 
end 