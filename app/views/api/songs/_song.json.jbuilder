json.set! song.id do 
  json.extract! song, :id, :title, :album_id

  if song.audio.attached?
	  json.audio_url url_for(song.audio)
  end 
end 