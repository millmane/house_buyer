import { connect } from 'react-redux';
import HouseForm from './house_form';
import { createHouse } from '../actions/house_actions';

const mapStateToProps = (state, ownProps) => ({
  lat: ownProps.location.query.lat,
  lng: ownProps.location.query.lng,
  address: ownProps.location.query.address,
  currentUser: state.session.currentUser

});

const mapDispatchToProps = dispatch => ({
  createHouse: house => dispatch(createHouse(house))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseForm);
