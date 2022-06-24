class PartnerCoffeesController < ApplicationController
    def index
        render json: PartnerCoffee.all, status: :ok
    end

 
end
