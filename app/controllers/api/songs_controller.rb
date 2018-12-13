class SongsController < ApplicationController
  def show 
    @song = Song.find(params[:id])
    render 'api/songs/show'
  end 

  def index 
    @songs = Song.all
    render 'api/songs/index'
  end 
end
