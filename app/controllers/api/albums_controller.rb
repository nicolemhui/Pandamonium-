class Api::AlbumsController < ApplicationController
  before_action :require_login
  
  def show 
    @album = Album.find(params[:id])
    render 'api/albums/show'
  end 

  def index 
    @albums = Album.all
    render 'api/albums/index'
  end 

  def search 
    search_string = params[:search_string]
    @albums = Album.where('lower(title) LIKE ? OR lower(title) LIKE ?', "%#{search_string.downcase}%", "#{search_string.downcase}%")
    render 'api/albums/index'
  end 

  def saved_albums
    @albums = current_user.saved_albums
    render 'api/albums/index'
  end

  def save
    @album = Album.find(params[:id])
    current_user.saved_albums << @album
    render 'api/albums/show'
  end

  def unsave
    @album = Album.find(params[:id])
    @save = Save.find_by(saveable_id: @album.id, saveable_type: 'Album', user_id: current_user.id)
    @save.destroy
    render 'api/albums/show'
  end
end
