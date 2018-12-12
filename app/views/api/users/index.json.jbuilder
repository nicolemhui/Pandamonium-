@users.each do |user|
  json.set! user.id do
    json.extract! :id, :username, :email
  end
end 
