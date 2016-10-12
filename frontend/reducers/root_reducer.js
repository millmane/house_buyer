import { combineReducers } from 'redux'
import HousesReducer from './houses_reducer';
import FiltersReducer from './filters_reducer';
import SessionReducer from './session_reducer';
import MapReducer from './map_reducer';


const RootReducer = combineReducers({
  houses: HousesReducer,
  filters: FiltersReducer,
  session: SessionReducer,
  map: MapReducer
});

export default RootReducer;
