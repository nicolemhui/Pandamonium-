class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: ['Username/Email already taken'], status: 401
    end
  end

  def index
    @users = User.all
    render '/api/users/index'
  end

  def show
    @user = User.find(params[:id])
    render '/api/users/show'
  end

  # def update
  # end
  #
  # def destroy
  # end

  private

  def user_params
    params(:user).require(:username, :password)
  end
end
