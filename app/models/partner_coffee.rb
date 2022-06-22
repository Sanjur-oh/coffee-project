class PartnerCoffee < ApplicationRecord
  belongs_to :coffee
  belongs_to :partner
end
