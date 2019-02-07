class Api::SongsController < ApplicationController
  before_action :require_login

  def show 
    @song = Song.find(params[:id])
    render 'api/songs/show'
  end 

  def index 
    @songs = Song.all
    render 'api/songs/index'
  end 

  def search 
    search_string = params[:search_string]
    @songs = Song.where('lower(title) LIKE ? OR lower(title) LIKE ?', "%#{search_string.downcase}%", "#{search_string.downcase}%")
    render 'api/songs/index'
  end 
end
