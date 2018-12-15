class Api::PlaylistsController < ApplicationController
  def create 
    @playlist = Playlist.new(playlist_params)
    @playlist.creator_id = current_user.id

    if @playlist.save 
      render 'api/playlists/show'
    else 
      render json: @playlist.errors.full_messages, status: 401
    end 
  end 

  def index
    @playlists = Playlist.all 
    render 'api/playlists/index'
  end 

  def show 
    @playlist = Playlist.find_by(params[:id])
    render 'api/playlists/show'
  end 

  def update 
    @playlist = Playlist.find_by(params[:id])
    if @playlist.update_attributes(playlist_params)
    else 
    end 
  end 

  def destroy 
    @playlist = Playlist.find_by(params[:id])
    if @playlist.creator_id == current_user.id && current_user.playlists.include?(@playlist)
      @playlist.destroy 
      render 'api/playlists/index'
    else 
      render json: ['Unable to delete playlist']
    end 
  end 

  private 

  def playlist_params 
    params.require(:playlist).permit(:name, :creator_id, :public)
  end 
end
