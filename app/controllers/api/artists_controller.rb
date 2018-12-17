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
end
