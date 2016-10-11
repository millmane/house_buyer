json.partial! '/api/houses/house', house: @house
json.current_price @house.current_price
json.price_history @house.price_history
