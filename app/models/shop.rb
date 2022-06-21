class Shop < ApplicationRecord
    has_many :shop_coffees
    has_many :users, through: :shop_coffees
end
