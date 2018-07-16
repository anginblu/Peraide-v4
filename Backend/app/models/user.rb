class User < ApplicationRecord

  #authenticate(password)
  has_secure_password

  validates :email, :username, presence: true
  validates :email, :username, uniqueness: true

end
