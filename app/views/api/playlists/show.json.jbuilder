json.playlist do 
  json.partial! 'api/playlists/playlist', playlist: @playlist
end 

json.playlistSongs do 
  @playlist.playlist_songs.each do |playlist_song|
    json.partial! 'api/playlist_songs/playlist_song', playlist_song: playlist_song
  end 
end 

json.songs do |song|
  @playlist.songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end 
end 

json.albums do 
  @playlist.songs.each do |song|
    json.partial! 'api/albums/album', album: song.album
  end 
end 