@houses.each do |house|
  json.set! house.id do
    json.partial! 'house', house: house
    # json.set! :price_history, house.price_history
    json.set! :current_price, house.current_price
  end
end
