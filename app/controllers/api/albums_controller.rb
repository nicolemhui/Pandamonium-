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
    
    results = ActiveRecord::Base.connection.execute(<<-SQL)
      SELECT albums.*, artists.name as artist_name, artists.id as artist_id
      FROM albums
      JOIN artist_albums ON albums.id = artist_albums.album_id
      JOIN artists ON artists.id = artist_albums.artist_id
      WHERE LOWER(albums.title) LIKE '%#{search_string.downcase}%'
    SQL
    
    @new_results = [];
    results.each do |result|
      album = Album.find_by("title" => result["title"])

      if (album.cover_photo.attached?)
        @new_results << result.merge!({"cover_photo" => album.cover_photo.service_url})
      end 
    end 
    
    render 'api/albums/search'
  end 
end
