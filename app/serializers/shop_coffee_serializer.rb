class ShopCoffeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :price
  has_one :shop
  has_one :user
end
