class Song < ApplicationRecord
  validates :title, presence: true

  belongs_to :album, optional: true
  has_many :artist_songs
  has_many :artists, 
    through: :artist_songs,
    source: :artist
  has_many :playlist_songs 
  has_many :playlists,
    through: :playlist_songs,
    source: :playlist 
  
  has_one_attached :audio
  has_one_attached :photo
end
