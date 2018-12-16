json.set! artist_song.id do 
  json.extract! artist_song, :id, :artist_id, :song_id, :ord
end 