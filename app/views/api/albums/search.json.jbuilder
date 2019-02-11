json.albums do 
  @new_results.each do |result| 
    json.set! result["id"] do 
      json.id result["id"]
      json.title result["title"]
      json.year result["year"]
      json.artistName result["artist_name"]
      json.artistId result["artist_id"]
      json.coverPhotoUrl result["cover_photo"]
    end 
  end 
end 
