class House < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  belongs_to :user
  has_many :prices

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

  def price_history
    self.prices.sort { |x,y| x.date <=> y.date}
  end

  def current_price
    price_history.last.price
  end

end
