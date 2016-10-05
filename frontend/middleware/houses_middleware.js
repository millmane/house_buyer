import { HouseConstants,
         requestHouses,
         requestHouse,
         receiveHouses,
         receiveHouse
       } from '../actions/house_actions';

import { fetchHouses, createHouse, fetchHouse } from '../util/house_api_util';
import { FilterConstants } from '../actions/filter_actions';

const HousesMiddleware = ({getState, dispatch}) => next => action => {
  const housesSuccess = data => dispatch(receiveHouses(data));
  const houseSuccess = data => dispatch(receiveHouse(data));
  const result = next(action);
  switch(action.type){
    case HouseConstants.REQUEST_HOUSES:
      const filters = getState().filters;
      fetchHouses(filters, housesSuccess)
      break;
    case HouseConstants.REQUEST_HOUSE:
      fetchHouse(action.id, houseSuccess);
      break;
    case FilterConstants.UPDATE_FILTER:
      dispatch(requestHouses());
      break;
    case HouseConstants.CREATE_HOUSE:
      createHouse(action.house, houseSuccess);
      break;
    default:
      break;
  }
  return result
}

export default HousesMiddleware;
