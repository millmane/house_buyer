import { combineReducers } from 'redux'
import HousesReducer from './houses_reducer';
import FiltersReducer from './filters_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  houses: HousesReducer,
  filters: FiltersReducer,
  session: SessionReducer
});

export default RootReducer;
