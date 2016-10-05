import { connect } from 'react-redux';
import HouseIndex from './house_index';
import { requestHouses } from '../actions/house_actions';

const mapStateToProps = state => ({
  houses: state.houses
});

const mapDispatchToProps = dispatch => ({
  requestHouses: () => dispatch(requestHouses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseIndex);
