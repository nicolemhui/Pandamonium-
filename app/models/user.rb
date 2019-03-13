class User < ApplicationRecord
  validates :username, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  has_one_attached :photo

  has_many :playlists,
  foreign_key: :creator_id,
  class_name: 'Playlist'
  
  has_many :saves,
    foreign_key: :user_id,
    class_name: :Save

  has_many :saved_songs,
    through: :saves,
    source: :saveable,
    source_type: 'Song'

  has_many :saved_albums,
    through: :saves,
    source: :saveable, 
    source_type: 'Album'

  has_many :saved_artists,
    through: :saves,
    source: :saveable,
    source_type: 'Artist'

  has_many :saved_playlists,
    through: :saves,
    source: :saveable,
    source_type: 'Playlist' 
    
  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
end
