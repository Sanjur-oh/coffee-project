# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


User.create(username: "Stan the man", email: "StanMarsh@hankeymail.com", password_digest: "1234")
User.create(username: "Kyle Bro", email: "KyleBroflovski@hankeymail.com", password_digest: "4321")
User.create(username: "Cartman Bruh", email: "EricCartman@hankeymail.com", password_digest: "9876")
User.create(username: "Mysterion", email: "KennyMcCormick@hankeymail.com", password_digest: "6789")


Partner.create(name: "Starbucks")
Partner.create(name: "Black Rock")
Partner.create(name: "PJ's Coffee")
Partner.create(name: "Dunkin")
Partner.create(name: "Scooters")

Coffee.create(name: "CARAMEL BLONDIE", description: "sweet and creamy with a bold coffee base", image: "https://cdn.shopify.com/s/files/1/0256/2169/2461/files/Blended-Caramel-Blondie_250x250.jpg?v=1620405444")
Coffee.create(name: "IRISH COFFEE", description: "signature espresso into a toffee-esque drink that is made with Half and Half", image: "https://cdn.shopify.com/s/files/1/0256/2169/2461/files/Blended_Irish_Coffee_Isolated_250x250.png?v=1620682881")
Coffee.create(name: "CARAMEL TRUFFLE", description: "espresso is flavored with caramel sauce and a rich chocolate milk", image: "https://cdn.shopify.com/s/files/1/0256/2169/2461/files/Blended-Caramel-Truffle_250x250.jpg?v=1620405460")
Coffee.create(name: "MEXICAN MOCHA", description: "exquisite fusion of fine-ground cocoa, vanilla, cinnamon and almond mixed with espresso and 2% milk", image: "https://cdn.shopify.com/s/files/1/0256/2169/2461/files/MexiMocha_250x250.jpg?v=1620415350")
Coffee.create(name: "BLACKOUT", description: "features our signature espresso and is mixed with hazelnut syrup and rich chocolate milk.", image: "https://cdn.shopify.com/s/files/1/0256/2169/2461/files/Blended-Blackout_250x250.jpg?v=1620415127")
Coffee.create(name: "JACKHAMMER", description: "vanilla syrup and chocolate milk and hammered with an extra double shot.", image: "https://cdn.shopify.com/s/files/1/0256/2169/2461/files/Jackhammer-square_250x250.jpg?v=1620331605")
Coffee.create(name: "I.V.", description: "injection of 6 shots of espresso combined with Irish Cream and Vanilla", image: "https://cdn.shopify.com/s/files/1/0256/2169/2461/files/IV-Square_250x250.jpg?v=1620331625")

Partner.all.each do |partner|
    rand(1..3).times do
      # get a random coffee
      coffee = Coffee.find(Coffee.pluck(:id).sample)
  
      PartnerCoffee.create!(partner_id: partner.id, coffee_id: coffee.id, price: rand(5..25))
    end
  end













# Shop.create(name: "Tweek Bros Coffee", address: "16th Main St, South Park, CO")
# Shop.create(name: "Tweek Bros Roasters", address: "13th SoDoSoPa, South Park, CO")

# User.create(username: "Stan the man", email: "StanMarsh@hankeymail.com", password_digest: "1234")
# User.create(username: "Kyle Bro", email: "KyleBroflovski@hankeymail.com", password_digest: "4321")
# User.create(username: "Cartman Bruh", email: "EricCartman@hankeymail.com", password_digest: "9876")
# User.create(username: "Mysterion", email: "KennyMcCormick@hankeymail.com", password_digest: "6789")

# ShopCoffee.create!(name: "CARAMEL BLONDIE", description: "sweet and creamy with a bold coffee base", image: "data:image/jpeg;base64,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", price: 5)

# ShopCoffee.create!(name: "CARAMEL BLONDIE", description: "sweet and creamy with a bold coffee base", image: "https://cdn.shopify.com/s/files/1/0256/2169/2461/files/Blended-Caramel-Blondie_250x250.jpg?v=1620405444", price: 5)
# ShopCoffee.create!(name: "IRISH COFFEE", description: "signature espresso into a toffee-esque drink that is made with Half and Half", image: "https://cdn.shopify.com/s/files/1/0256/2169/2461/files/Blended_Irish_Coffee_Isolated_250x250.png?v=1620682881", price: 5)
# ShopCoffee.create!(name: "CARAMEL TRUFFLE", description: "espresso is flavored with caramel sauce and a rich chocolate milk", image: "https://cdn.shopify.com/s/files/1/0256/2169/2461/files/Blended-Caramel-Truffle_250x250.jpg?v=1620405460", price: 5)
# ShopCoffee.create!(name: "MEXICAN MOCHA", description: "exquisite fusion of fine-ground cocoa, vanilla, cinnamon and almond mixed with espresso and 2% milk", image: "https://cdn.shopify.com/s/files/1/0256/2169/2461/files/MexiMocha_250x250.jpg?v=1620415350", price: 5)
# ShopCoffee.create!(name: "BLACKOUT", description: "features our signature espresso and is mixed with hazelnut syrup and rich chocolate milk.", image: "https://cdn.shopify.com/s/files/1/0256/2169/2461/files/Blended-Blackout_250x250.jpg?v=1620415127", price: 5)
# ShopCoffee.create!(name: "JACKHAMMER", description: "vanilla syrup and chocolate milk and hammered with an extra double shot.", image: "https://cdn.shopify.com/s/files/1/0256/2169/2461/files/Jackhammer-square_250x250.jpg?v=1620331605", price: 5)
# ShopCoffee.create!(name: "I.V.", description: "injection of 6 shots of espresso combined with Irish Cream and Vanilla", image: "https://cdn.shopify.com/s/files/1/0256/2169/2461/files/IV-Square_250x250.jpg?v=1620331625", price: 5)

# ActiveRecord::NotNullViolation: PG::NotNullViolation: ERROR:  null value in column "shop_id" violates not-null constraint
# ActiveRecord::RecordInvalid: Validation failed: Shop must exist, User must exist