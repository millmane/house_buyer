import { connect } from 'react-redux';
import HouseShow from './house_show';
// Actions
import { requestHouse } from '../actions/house_actions';
import { updateFilter } from '../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {
  const houseId = parseInt(ownProps.params.houseId);
  const house = state.houses[houseId] || {};
  const houseLat = parseFloat(house.lat)

  const houseLng = parseFloat(house.lng)

  return {
    houseId,
    houseLat,
    houseLng,
    house,
  };
};

const mapDispatchToProps = dispatch => ({
  requestHouse: id => dispatch(requestHouse(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseShow);
