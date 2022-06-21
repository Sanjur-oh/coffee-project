class ShopCoffeesController < ApplicationController

    def index
        render json: ShopCoffee.all, status: :ok
    end
end
