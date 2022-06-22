class CoffeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description
end
