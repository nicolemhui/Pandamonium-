json.playlists do 
  @playlists.each do |playlist|
    json.partial! 'api/playlists/playlist', playlist: playlist
  end 
end 


# FIX ME !


json.songs do 
  @playlists.each do |playlist|
  #debugger
    playlist.playlist_songs.each do |playlist_song|
      json.partial! 'api/songs/song', song: playlist_song.song 
    end 
  end 
end 

json.artists do 
  @playlists.each do |playlist|
    playlist.songs.each do |song|
      song.artists.each do |artist|
        json.partial! 'api/artists/artist', artist: artist 
      end 
    end 
  end 
end 

