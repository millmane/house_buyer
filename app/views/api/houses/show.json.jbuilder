json.partial! '/api/houses/house', house: @house
json.set! :price_history, @price_history
json.set! :current_price, @current_price
# json.price_history @house.ph
# json.current_price @house.current_price

# json.price_history house.price_history
# json.current_price house.current_price
