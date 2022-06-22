class Coffee < ApplicationRecord
    has_many :partner_coffees
    has_many :partners, through: :partner_coffees
end
