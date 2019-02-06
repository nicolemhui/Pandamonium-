# == Schema Information
#
# Table name: saves
#
#  id            :bigint(8)        not null, primary key
#  user_id       :integer
#  saveable_id   :bigint(8)
#  saveable_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class SaveTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
