import { MapConstants } from '../actions/map_actions';
import merge from 'lodash/merge';

const MapReducer = function(state = {}, action){
  switch(action.type){
    case MapConstants.RECEIVE_MARKERS:
    const markers = {}
    // action.markers.forEach((marker) => {
    //   markers: markers[marker.houseId] = marker
    // })
    return {markers: action.markers}
    // case HouseConstants.RECEIVE_MARKERS:
    //   const newMarkers = {[action.house.id]: action.house}
    //   return merge({}, state, newHouse);
    default:
      return state
  }
};

export default MapReducer;
