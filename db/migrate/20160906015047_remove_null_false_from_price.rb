class RemoveNullFalseFromPrice < ActiveRecord::Migration
  def change
    change_column_null :houses, :price, true
  end
end
