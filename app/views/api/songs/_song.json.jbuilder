json.set! song.id do 
  json.extract! song, :id, :title, :album_id

  if song.audio.attached?
	  json.audioUrl url_for(song.audio)
  end 

  if song.photo.attached?
	  json.photoUrl url_for(song.photo)
  end 
end 