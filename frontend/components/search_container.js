import { connect } from 'react-redux';
//Components
import Search from './search';
//Actions
import { requestHouses } from '../actions/house_actions';
import { updateFilter, updateMapOptions, updateBounds } from '../actions/filter_actions';


const mapStateToProps = state => ({
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
  // bounds: state.filters.bounds
});

const mapDispatchToProps = dispatch => ({
  requestHouses: () => dispatch(requestHouses()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateMapOptions: options => dispatch(updateMapOptions(options))
  // updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
