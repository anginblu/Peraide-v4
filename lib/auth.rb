require 'jwt'

  class Auth
    def self.create_token(user_object)
      user_payload = JSON.parse(user_object.to_json)
      payload = {user: user_payload}
      token = JWT.encode(payload, 'peraide', 'HS256')
      decode_token(token)
    end

    def self.decode_token(token)
      JWT.decode(token, 'peraide', true, {algorithm: 'HS256'})
    end
  end
