# == Schema Information
#
# Table name: artist_albums
#
#  id         :bigint(8)        not null, primary key
#  artist_id  :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ArtistAlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
