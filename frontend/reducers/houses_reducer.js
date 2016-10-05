import { HouseConstants } from '../actions/house_actions';
import merge from 'lodash/merge';

const HousesReducer = function(state = {}, action){
  switch(action.type){
    case HouseConstants.RECEIVE_HOUSES:
      return action.houses;
    case HouseConstants.RECEIVE_HOUSE:
      const newHouse = {[action.house.id]: action.house}
      return merge({}, state, newHouse);
    default:
      return state
  }
};

export default HousesReducer;
