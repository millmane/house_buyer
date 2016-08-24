class CreateHouses < ActiveRecord::Migration
  def change
    create_table :houses do |t|
      t.string :description
      t.float :lat
      t.float :lng

      t.timestamps null: false
    end
  end
end
