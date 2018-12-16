json.set! song.id do 
  json.extract! song, :id, :title, :album_id

  json.artist_ids song.artists.as_json.map{ |obj| obj["id"] }

  if song.photo.attached?
	  json.photoUrl url_for(song.photo)
  end 
end 