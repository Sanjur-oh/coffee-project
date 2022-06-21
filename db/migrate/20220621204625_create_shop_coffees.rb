class CreateShopCoffees < ActiveRecord::Migration[7.0]
  def change
    create_table :shop_coffees do |t|
      t.string :name
      t.string :description
      t.string :image
      t.integer :price
      t.references :shop, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
