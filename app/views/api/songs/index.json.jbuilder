json.albums do 
  @songs.each do |song|
    album = song.album
    json.partial! 'api/albums/album', album: album
  end 
end 

json.songs do 
  @songs.each do |song|
    json.partial! 'api/songs/song', song: song 
  end 
end 

json.artists do 
  @songs.each do |song|
    artists = song.artists 
    artists.each do |artist|
      json.partial! 'api/artists/artist', artist: artist
    end 
  end 
end 