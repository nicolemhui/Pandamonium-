class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      debugger
      render 'api/users/show'
    else
      render json: ['Username/Email already taken'], status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
