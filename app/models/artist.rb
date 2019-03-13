class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :artist_songs
  has_many :songs, 
    through: :artist_songs,
    source: :song
  has_many :artist_albums
  has_many :albums,
    through: :artist_albums, 
    source: :album

  has_one_attached :photo
end
