json.artists do 
  @artists.each do |artist|
    json.partial! 'api/artists/artist', artist: artist 
  end 
end 

json.albums do 
  @artists.each do |artist|
    albums = artist.albums
    albums.each do |album|
      json.partial! 'api/albums/album', album: album
    end 
  end 
end 

json.songs do 
  @artists.each do |artist|
    songs = artist.songs 
    songs.each do |song|
      json.partial! 'api/songs/song', song: song 
    end 
  end 
end 
