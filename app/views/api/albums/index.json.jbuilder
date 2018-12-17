json.artists do 
  @albums.each do |album|
    artists = album.artists 
    artists.each do |artist|
      json.partial! 'api/artists/artist', artist: artist
    end 
  end 
end 

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

json.artistSongs do 
  @albums.each do |album|
    album.songs.each do |song|
      song.artist_songs.each do |artist_song|
        json.partial! 'api/artist_songs/artist_song', artist_song: artist_song
      end
    end 
  end 
end 

json.artistAlbums do 
  @albums.each do |album|
    album.artist_albums.each do |artist_album|
      json.partial! 'api/artist_albums/artist_album', artist_album: artist_album
    end 
  end 
end 

