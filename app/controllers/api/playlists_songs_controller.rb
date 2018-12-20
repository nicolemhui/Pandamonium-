class Api::PlaylistsSongsController < ApplicationController
  before_action :require_login
  
  def create 
    @playlist_song = PlaylistSong.new(playlist_id: params[:playlist_id], song_id: params[:song_id])

    if @playlist_song.save
      render 'api/playlist_songs/show'
    else 
      render json: @playlist_song.errors.full_messages, status: 401
    end 
  end 

  def destroy 
    # debugger
    @playlist_song = PlaylistSong.find_by(playlist_id: params[:playlist_id], song_id: params[:song_id])
    # delete from current playlist 
    @playlist_song.delete 
    #return to playlist show page 
    render 'api/playlist_songs/show'
  end 

  private 

  # QUESTION - why does params not have both playlist_id and song_id?? nested route
  # def playlist_params
  #   params.require(:playlist_song).permit(:playlist_id, :song_id)
  # end 

end

# DELETE /api/playlist_songs/:id - delete song from playlist
