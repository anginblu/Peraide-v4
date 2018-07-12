

class Api::V1::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      render json: {token: Auth.create_token({username: user.username, id: user.id, email: user.email}) }
    else
      render json: { error: "Incorrect Username or Password."}, status: 500
    end
  end

end
