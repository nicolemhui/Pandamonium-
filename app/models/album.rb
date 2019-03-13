class Album < ApplicationRecord
  validates  :title, :year, presence: true 

  has_many :songs
  has_many :artist_albums
  has_many :artists, 
    through: :artist_albums, 
    source: :artist
  
  has_one_attached :cover_photo
end
