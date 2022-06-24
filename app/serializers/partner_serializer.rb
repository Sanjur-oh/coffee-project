class PartnerSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :partner_coffees
end
