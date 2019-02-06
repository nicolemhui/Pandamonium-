class Api::PlaylistsController < ApplicationController
  before_action :require_login

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
    # @playlists = current_user.playlists
    render 'api/playlists/index'
  end 
  
  def show 
    @playlist = Playlist.find(params[:id])
    render 'api/playlists/show'
  end 
  
  def destroy 
    @playlist = Playlist.find(params[:id])
    if @playlist.creator_id == current_user.id && current_user.playlists.include?(@playlist)
      @playlist.destroy 
      render 'api/playlists/show'
    else 
      render json: ['Unable to delete playlist']
    end 
  end 
  
  def search 
    search_string = params[:search_string]
    @playlists = Playlist.where('lower(name) LIKE ? OR lower(name) LIKE ?', "%#{search_string.downcase}%", "#{search_string.downcase}%")
    render :index
  end 

  private 

  def playlist_params 
    params.require(:playlist).permit(:name, :creator_id, :public)
  end 
end
