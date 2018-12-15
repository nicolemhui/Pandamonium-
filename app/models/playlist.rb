# == Schema Information
#
# Table name: playlists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  creator_id :integer          not null
#  public     :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

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
end
