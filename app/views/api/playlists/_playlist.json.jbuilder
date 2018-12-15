json.set! playlist.id do 
  json.extract! playlist, :name, :creator_id, :public
end 