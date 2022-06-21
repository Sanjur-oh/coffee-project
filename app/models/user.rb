class User < ApplicationRecord
    has_secure_password

    has_many :shop_coffees
    has_many :shops, through: :shop_coffees
end
