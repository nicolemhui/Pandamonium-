require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'password encryption' do 
    it 'does not save passwords into database' do 
      User.create!(username: 'demouser', email: 'demo@user.com', password: 'abcdefg')
      demo = User.find_by_username('demouser')
      expect(demo.password).not_to be('abcdefg')
    end 

    it 'encrypts password using BCrypt' do 
      expect(BCrypt::Password).to receive(:create)
      User.new(username: 'demouser', email: 'demo@user.com', password: 'abcdefg')
    end 
  end 

  describe 'user' do 
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_length_of(:password).is_at_least(6) }

    it { should have_many(:playlists).class_name(:Playlist) }
  end 
end
