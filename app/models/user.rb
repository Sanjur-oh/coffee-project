class User < ApplicationRecord
    has_secure_password

    has_many :shop_coffees
    has_many :shops, through: :shop_coffees

    validates :password, presence: true
    # validates :password, length: 5, presence: true
    # validates :name, presence: true
    validates :username, presence: true
end
