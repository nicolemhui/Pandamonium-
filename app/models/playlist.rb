class Playlist < ApplicationRecord
  validates :name, :creator_id, presence: true
  validates :public, inclusion: { in: [ true, false ] }
  
 belongs_to :creator,
    foreign_key: :creator_id,
    class_name: 'User'
  
  has_many :playlist_songs
  
  has_many :songs,
    through: :playlist_songs,
    source: :song
  
  has_one_attached :photo
end
