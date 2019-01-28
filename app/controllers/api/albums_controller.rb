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
    @albums = Album.where('lower(title) LIKE ? OR lower(title) LIKE ?', "% #{search_string.downcase}%", "#{search_string.downcase}%")
    render :index
  end 
end
