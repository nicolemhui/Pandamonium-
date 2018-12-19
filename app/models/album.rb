# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  validates  :title, :year, presence: true 

  has_many :songs
  has_many :artist_albums
  has_many :artists, 
    through: :artist_albums, 
    source: :artist

  has_one_attached :cover_photo
end
