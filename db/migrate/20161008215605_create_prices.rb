class CreatePrices < ActiveRecord::Migration
  def change
    create_table :prices do |t|
      t.datetime :date, null: false
      t.float :price, null: false
      t.integer :house_id, null: false

      t.timestamps null: false
    end
  end
end
