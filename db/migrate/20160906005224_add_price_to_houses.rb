class AddPriceToHouses < ActiveRecord::Migration
  def change
    add_column :houses, :price, :float, null: false
  end
end
