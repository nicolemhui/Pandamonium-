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
end
