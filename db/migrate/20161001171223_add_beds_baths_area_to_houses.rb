class AddBedsBathsAreaToHouses < ActiveRecord::Migration
  def change
    add_column :houses, :beds, :integer
    add_column :houses, :baths, :integer
    add_column :houses, :area, :integer
  end
end
