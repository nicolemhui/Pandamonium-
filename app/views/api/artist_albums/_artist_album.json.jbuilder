json.set! artist_album.id do 
  json.extract! artist_album, :id, :artist_id, :album_id
end 