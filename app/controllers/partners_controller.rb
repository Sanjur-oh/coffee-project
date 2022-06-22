class PartnersController < ApplicationController
    def index
        render json: Partner.all, status: :ok
    end
end
