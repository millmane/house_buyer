import { FilterConstants } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultBounds = Object.freeze({
// could clean this by making objects EX: Price{min, max}
    bounds: {},
    minPrice: 0,
    maxPrice: 100000,
    minBeds: 0,
    maxBeds: 10,
    minBaths: 0,
    maxBaths: 10,
    minArea: 0,
    maxArea: 10000,
    mapOptions: {
      center: {
        lat: 37.7758,
        lng: -122.435
      },
      zoom: 13
    }
});
// mapOptions: {
//   center: {
//     lat: 37.7758,
//     lng: -122.435
//   },
//   zoom: 13
// }

const FiltersReducer = function(state = _defaultBounds, action){
  switch(action.type){
    case FilterConstants.UPDATE_FILTER:
      const newFilter = {[action.filter]: action.value};
      return merge({}, state, newFilter);
    case FilterConstants.UPDATE_MAP_OPTIONS:
    console.log("map options updated");
      const newOptions = {mapOptions: action.options};
      return merge({}, state, newOptions);
    default:
      return state
  }
};

export default FiltersReducer;
