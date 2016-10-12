class Api::HousesController < ApplicationController
  def index
    houses = bounds ? House.in_bounds(bounds) : House.all
    # Could clean up with a Filters param and looping through instead of multile ifs
    if (params[:minPrice] && params[:maxPrice])
      # houses = houses.where(price: price_range)
      houses = houses.where(:price => [price_range, nil])
      # houses += houses.where(price: nil, pr)
    end
    if (params[:minBeds] && params[:maxBeds])
      # houses = houses.where(price: price_range)
      houses = houses.where(:beds => [bed_range, nil])
    end
    if (params[:minBaths] && params[:maxBaths])
      # houses = houses.where(price: price_range)
      houses = houses.where(:baths => [bath_range, nil])
    end
    if (params[:minArea] && params[:maxArea])
      # houses = houses.where(price: price_range)
      houses = houses.where(:area => [area_range, nil])
    end
    @houses = houses
    # @houses.each do |house|
    #   house.current_price
    # end

    render :index
  end

  def create
    @house = House.create!(house_params);
    render :show
  end

  def show
    @house = House.find(params[:id])
    @price_history = @house.price_history
    @current_price = @house.current_price
    render :show
  end


  private

  def price_range
    (params[:minPrice]..params[:maxPrice])
  end

  def bed_range
    (params[:minBeds]..params[:maxBeds])
  end

  def bath_range
    (params[:minBaths]..params[:maxBaths])
  end

  def area_range
    (params[:minArea]..params[:maxArea])
  end

  def house_params
    params.require(:house).permit(
      :lat,
      :lng,
      :description,
      :price,
      :picture_url,
      :beds,
      :baths,
      :area
    )
  end

  def bounds
    params[:bounds]
  end

end
