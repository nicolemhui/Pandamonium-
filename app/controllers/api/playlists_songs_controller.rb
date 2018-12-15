class Api::PlaylistsSongsController < ApplicationController
  def destroy 
    @playlist_song = PlaylistSong.find_by(params[:id])
    # delete from current playlist 
    @playlist_song.delete 
    #return to playlist show page 
    render 'api/playlists/show'
  end 
end

# DELETE /api/playlist_songs/:id - delete song from playlist
