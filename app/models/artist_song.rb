# == Schema Information
#
# Table name: artist_songs
#
#  id         :bigint(8)        not null, primary key
#  artist_id  :integer          not null
#  song_id    :integer          not null
#  ord        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ArtistSong < ApplicationRecord
  belongs_to :artist
  belongs_to :song
end
