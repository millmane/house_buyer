import { connect } from 'react-redux';
import AppRouter from './router';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  // requestHouses: () => dispatch(requestHouses()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  // updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
