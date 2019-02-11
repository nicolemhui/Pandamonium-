json.songs do 
  @new_results.each do |result| 
    json.set! result["id"] do 
      json.id result["id"]
      json.title result["title"]
      json.albumId result["album_id"]
      json.albumTitle result["album_title"]
      json.albumCoverPhotoUrl result["album_cover_photo"]
      json.artistId result["artist_id"]
      json.artistName result["artist_name"]
      json.audioUrl result["audio"]
      json.photoUrl result["cover_photo"]
    end 
  end 
end 
