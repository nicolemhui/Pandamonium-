json.artist do 
  json.partial! 'api/artists/artist', artist: @artist 
end 

json.albums do 
  albums = @artist.albums
  albums.each do |album|
    json.partial! 'api/albums/album', album: album
  end 
end 

json.songs do 
  songs = @artist.songs 
  songs.each do |song|
    json.partial! 'api/songs/song', song: song 
  end 
end 

