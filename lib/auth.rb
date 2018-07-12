require 'JWT'

class Auth
  def self.create_token(user_object)
    user_payload = JSON.parse(user_object.to_json)
    payload = {user: user_payload}
    token = JWT.encode(payload, 'peraide', 'HS256')

  end


end
