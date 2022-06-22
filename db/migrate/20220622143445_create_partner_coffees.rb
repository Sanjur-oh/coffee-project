class CreatePartnerCoffees < ActiveRecord::Migration[7.0]
  def change
    create_table :partner_coffees do |t|
      t.references :coffee, null: false, foreign_key: true
      t.references :partner, null: false, foreign_key: true
      t.integer :price

      t.timestamps
    end
  end
end
