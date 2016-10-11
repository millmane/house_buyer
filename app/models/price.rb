class Price < ActiveRecord::Base
  validates :price, :house_id, :date, presence: true

  belongs_to :house
end
