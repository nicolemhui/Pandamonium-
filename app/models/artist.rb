# == Schema Information
#
# Table name: artists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  bio        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :artist_songs,
    foreign_key: :artist_id,
    class_name: 'ArtistSong'
  has_many :songs, 
    through: :artist_songs,
    source: :song
  has_many :artist_albums,
    foreign_key: :artist_id,
    class_name: 'ArtistAlbum'
  has_many :albums,
    through: :artist_albums, 
    source: :album
end