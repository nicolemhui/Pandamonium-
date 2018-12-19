json.set! playlist.id do 
  json.extract! playlist, :id, :name, :creator_id, :public
end 