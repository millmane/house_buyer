class AddUserIdToHouses < ActiveRecord::Migration
  def change
    add_column :houses, :user_id, :integer, null: false
  end
end
