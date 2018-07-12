class Api::V1::SessionsController < ApplicationController

  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      render json: user
    else
      render json: { error: "Incorrect Username or Password."}, status: 500
    end
  end

end
