class PartnerCoffeeSerializer < ActiveModel::Serializer
  attributes :id, :price
  has_one :coffee
  has_one :partner
end
