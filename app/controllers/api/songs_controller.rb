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

  def saved_songs
    @songs = current_user.saved_songs
    render 'api/songs/index'
  end

  def search 
    search_string = params[:search_string]
    
    results = ActiveRecord::Base.connection.execute(<<-SQL)
      SELECT songs.*, artists.name as artist_name, artists.id as artist_id
      FROM songs
      JOIN artist_songs ON songs.id = artist_songs.song_id
      JOIN artists ON artists.id = artist_songs.artist_id
      WHERE LOWER(songs.title) LIKE '%#{search_string.downcase}%'
    SQL
    
    @new_results = [];
    results.each do |result|
      song = Song.find_by("title" => result["title"])
      @new_results << result.merge!({"audio" => song.audio.service_url}) if song.audio.attached?
      @new_results << result.merge!({"cover_photo" => song.photo.service_url}) if song.photo.attached?

      if song.album 
        @new_results << result.merge!({"album_title" => song.album.title}) 
        if song.album.cover_photo.attached?
          @new_results << result.merge!({"album_cover_photo" => song.album.cover_photo.service_url })
        end 
      end 
    end 

    render 'api/songs/search'
  end 
end
