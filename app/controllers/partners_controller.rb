class PartnersController < ApplicationController
    def index
        render json: Partner.all, status: :ok
    end

    def show
        partner = find_partner
        render json: partner, status: :ok
    end


    private

    def find_partner
        Partner.find(params[:id])
    end
end
