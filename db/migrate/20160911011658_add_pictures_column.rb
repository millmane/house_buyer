class AddPicturesColumn < ActiveRecord::Migration
  def change
    add_column :houses, :picture_url, :string
  end
end
