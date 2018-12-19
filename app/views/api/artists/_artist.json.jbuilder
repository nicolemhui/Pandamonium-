json.set! artist.id do 
  json.extract! artist, :id, :name, :bio 

  if artist.photo.attached?
    json.photoUrl url_for(artist.photo)
  end 
end 