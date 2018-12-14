class Playlist < ApplicationRecord
  validates :name, :creator_id, presence: true
  validates :public, inclusion: { in: [ true, false ] }
  
  belongs_to :user
end
