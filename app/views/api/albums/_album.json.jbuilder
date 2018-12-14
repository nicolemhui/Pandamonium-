if album 
  json.set! album.id do 
    json.extract! album, :id, :title, :year 
  end
end  