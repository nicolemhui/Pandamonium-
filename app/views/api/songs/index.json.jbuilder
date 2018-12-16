json.songs do 
  @songs.each do |song|
    json.partial! 'api/songs/song', song: song 
  end 
end 

json.albums do 
  @songs.each do |song|
    album = song.album
    json.partial! 'api/albums/album', album: album
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

json.artistSongs do 
  @songs.each do |song|
    song.artist_songs.each do |artist_song|
      json.partial! 'api/artist_songs/artist_song', artist_song: artist_song
    end
  end 
end 

json.artistAlbums do 
  @songs.each do |song|
    song.artist_songs.each do |artist_song|
      json.partial! 'api/artist_songs/artist_song', artist_song: artist_song
    end
  end 
end 
