class CoffeesController < ApplicationController
    def index
        render json: Coffee.all, status: :ok
    end

    def show
        coffee = find_coffee
        render json: coffee, status: :ok
    end

    def create
        coffee = Coffee.create!(coffee_params)
        render json: coffee, status: :created
    end


    def update
        coffee = find_coffee
        coffee.update!(description)
        render json: coffee, status: :ok
    end

    def destroy
        coffee = find_coffee
        coffee.destroy
        head :no_content, status: :ok
    end

    private

    def coffee_params
        params.permit(:name, :image, :description)
    end

    def find_coffee
        Coffee.find(params[:id])
    end


end
