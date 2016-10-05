import { connect } from 'react-redux';
//Components
import LandingPage from './landing_page';
//Actions
import { requestHouses } from '../actions/house_actions';
import { updateBounds } from '../actions/filter_actions';
import { updateFilter } from '../actions/filter_actions';


const mapStateToProps = state => ({
  // houses: state.houses,
  // minPrice: state.filters.minPrice,
  // maxPrice: state.filters.maxPrice,
  mapOptions: state.filters.mapOptions
});

const mapDispatchToProps = dispatch => ({
  // requestHouses: () => dispatch(requestHouses()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  // updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
