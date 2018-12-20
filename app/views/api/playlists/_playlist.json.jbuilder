json.set! playlist.id do 
#debugger
  json.extract! playlist, :id, :name, :creator_id, :public

  if playlist.photo.attached?
    json.photo_url url_for(playlist.photo)
  end 
end 