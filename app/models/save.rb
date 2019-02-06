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

class Save < ApplicationRecord
  belongs_to :saveable, polymorphic: true

  belongs_to :user
end
