if album 
  json.set! album.id do 
    json.extract! album, :id, :title, :year 
    
#    if album.cover_photo.attached?
#	    json.cover_photo_url url_for(album.cover_photo)
#    end 
  end
end  