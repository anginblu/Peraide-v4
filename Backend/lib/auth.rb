require 'jwt'

  class Auth
    def self.create_token(user_object)
      user_payload = JSON.parse(user_object.to_json)
      payload = {user: user_payload}
      token = JWT.encode(payload, 'peraide', 'HS256')
    end

    def self.decode_token(token)
      JWT.decode(token, 'peraide', true, {algorithm: 'HS256'})
    end
  end


##Angular
#token will be saved as  request.env["HTTP_AUTHORIZATION"]

#window.localStorage.setItem('Token', request.env["HTTP_AUTHORIZATION"])
#let token = window.localStorage.getItem('Token')
#fetch('', {method: 'GET', headers: {'Authorization': }}).then(resp => resp.json())
