export const HouseConstants = {
  RECEIVE_HOUSES: "RECEIVE_HOUSES",
  RECEIVE_HOUSE : "RECEIVE_HOUSE",
  REQUEST_HOUSES: "REQUEST_HOUSES",
  REQUEST_HOUSE : "REQUEST_HOUSE",
  CREATE_HOUSE  : "CREATE_HOUSE"

}

export const requestHouses = () => ({
  type: HouseConstants.REQUEST_HOUSES
});

export const requestHouse = id => ({
  type: HouseConstants.REQUEST_HOUSE,
  id
});

export const receiveHouses = houses => ({
  type: HouseConstants.RECEIVE_HOUSES,
  houses
});

export const receiveHouse = house => ({
  type: HouseConstants.RECEIVE_HOUSE,
  house
});

export const createHouse = house => ({
  type: HouseConstants.CREATE_HOUSE,
  house
});
