class House < ActiveRecord::Base

  attr_accessor :ph

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
    @price_history ||= self.prices.sort { |x,y| x.date <=> y.date}

    # self.ph = self.prices.sort { |x,y| x.date <=> y.date}
    # return self.ph
    # self.tester = price_history
  end

  def current_price
    @current_price ||= self.prices.max {|a,b| a.date <=> b.date }.price

    # price_history.last.price
    # self.prices.max {|a,b| a.date <=> b.date }.price

    # @price_history.last.price
  end

end
