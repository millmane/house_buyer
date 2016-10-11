import { connect } from 'react-redux';
import HouseShow from './house_show';
// Actions
import { requestHouse } from '../actions/house_actions';
import { updateFilter } from '../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {
  const houseId = parseInt(ownProps.params.houseId);
  const house = state.houses[houseId] || {};
  const houseLat = parseFloat(house.lat)
  let priceHistory = {}
  if (state.houses[houseId]) {
    priceHistory = state.houses[houseId].price_history
  }
  const houseLng = parseFloat(house.lng)
  const mapOptions = state.filters.mapOptions

  return {
    houseId,
    houseLat,
    houseLng,
    house,
    priceHistory,
    mapOptions
  };
};

const mapDispatchToProps = dispatch => ({
  requestHouse: id => dispatch(requestHouse(id)),
  requestHouses: () => dispatch(requestHouses()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseShow);
