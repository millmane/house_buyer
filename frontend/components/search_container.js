import { connect } from 'react-redux';
//Components
import Search from './search';
//Actions
import { requestHouses } from '../actions/house_actions';
import { updateFilter, updateMapOptions, updateBounds } from '../actions/filter_actions';
import { receiveMarkers } from '../actions/map_actions'


const mapStateToProps = state => {
// console.log(state.map.markers);
  return {
  // could clean this by making objects EX: Price{min, max}
  houses: state.houses,
  minPrice: state.filters.minPrice,
  maxPrice: state.filters.maxPrice,
  minBeds: state.filters.minBeds,
  maxBeds: state.filters.maxBeds,
  minBaths: state.filters.minBaths,
  maxBaths: state.filters.maxBaths,
  minArea: state.filters.minArea,
  maxArea: state.filters.maxArea,
  mapOptions: state.filters.mapOptions,
  markers: state.map.markers
  // bounds: state.filters.bounds
}
};

const mapDispatchToProps = dispatch => ({
  requestHouses: () => dispatch(requestHouses()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateMapOptions: options => dispatch(updateMapOptions(options)),
  receiveMarkers: markers => dispatch(receiveMarkers(markers))
  // updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
