class Api::ArtistsController < ApplicationController
  before_action :require_login
  
  def show 
    @artist = Artist.find(params[:id])
    render 'api/artists/show'
  end 

  def index 
    @artists = Artist.all
    render 'api/artists/index'
  end 

  def saved_artists
    @artists = current_user.saved_artists
    render 'api/artists/index'
  end
  
  def search 
    search_string = params[:search_string]
    @artists = Artist.where('lower(name) LIKE ?', "%#{search_string.downcase}%")
    render :search
  end 

end