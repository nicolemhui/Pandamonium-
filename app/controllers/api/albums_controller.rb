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
    debugger;
    
    search_string = params[:search_string]
    @albums = Album.where('lower(title) LIKE ?', "%#{search_string.downcase}%").limit(5)
    render :index
  end 
end
