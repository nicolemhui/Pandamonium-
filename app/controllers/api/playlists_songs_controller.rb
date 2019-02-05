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
    @playlist_song = PlaylistSong.find_by(playlist_id: params[:playlist_id], song_id: params[:song_id])
    @playlist_song.delete 
    render 'api/playlist_songs/show'
  end 

  private 
end
# DELETE /api/playlist_songs/:id - delete song from playlist
