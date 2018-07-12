class Api::V1::UsersController < ApplicationController
  def create
    render json: {message: "Signup"}
  end
end
