if album 
  json.set! album.id do 
    json.extract! album, :id, :title, :year 
    
    if album.cover_photo.attached?
	    json.coverPhotoUrl url_for(album.cover_photo)
    end 

  end
end  