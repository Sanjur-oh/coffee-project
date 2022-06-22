class UsersController < ApplicationController

    def index
        render json: User.all, status: :ok
    end

    # def show
    #     user = find_user
    #     render json: user, status: :ok
    # end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: 'Not authenticated', status: :unauthorized
        end
    end


    # def create
    #     user = User.create!(user_params)
    #     render json: user, status: :created
    # end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id # piece that logs our user in 
            render json: user, status: :created
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end


    def update
        user = find_user
        user.update!(user_params)
        render json: user, status: :ok
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content, status: :ok
    end

    private

    def user_params
        params.permit(:username, :email, :password_digest)
    end

    def find_user
        User.find(params[:id])
    end
end
