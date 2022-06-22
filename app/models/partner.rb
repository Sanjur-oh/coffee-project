class Partner < ApplicationRecord
    has_many :partner_coffees
    has_many :coffees, through: :partner_coffees
end
