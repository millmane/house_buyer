import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import GreetingContainer2 from './greeting2_container';

class FilterBar extends React.Component {

  constructor(props){
    super(props);
    // console.log(props);
    this.state = {
      minPrice: props.minPrice,
      maxPrice: props.maxPrice
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.priceRange = "Any Price"
  }

  componentDidMount(){
    this.autocomplete = new google.maps.places.Autocomplete(
      (this.refs.mapSearch), {
        types: ['geocode']
    });
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleChange(filter, updateFilter) {
    return e => {
      // updateFilter(filter, e.currentTarget.value)
      this.state[filter] = e.currentTarget.value
      this.priceRange = ("$" + this.state.minPrice + " - $" + this.state.maxPrice) || "Any Price"
    }
  }

  handleSubmit(updateFilter) {
    return e => {
      //without preventDefault the state will not update.
      //Putting in a time delay on hashHistory.push will let the state update
      //need clarification on why this happens
      e.preventDefault()
      //southwest lng
      const swlng = this.autocomplete.getPlace().geometry.viewport.b.b;
      //northeast lng
      const nelng = this.autocomplete.getPlace().geometry.viewport.b.f;
      //northeast lat
      const nelat = this.autocomplete.getPlace().geometry.viewport.f.b;
      //southwest lat
      const swlat = this.autocomplete.getPlace().geometry.viewport.f.f;

      const bounds = {
        northEast: {
          lat: nelat,
          lng: nelng
        },
        southWest: {
          lat: swlat,
          lng: swlng
        }
      };

      const lat = this.autocomplete.getPlace().geometry.location.lat()
      const lng = this.autocomplete.getPlace().geometry.location.lng()
      const center = {
        lat: lat,
        lng: lng
      }

      const options = {
        center,
        zoom: 13
      }

      // updateFilter("bounds", bounds)
      updateFilter("mapOptions", options)
    }
  }

  render () {
    return(
      <nav id="navbar-z900" className="navbar navbar-default">
        <div className="container-fluid" id="custom-filter-bar">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#filter-bar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="filter-bar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <form className="navbar-form navbar-left" id="filter-bar-search"
                      onSubmit={this.handleSubmit(this.props.updateFilter)}>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        ref="mapSearch"
                        className="form-control"
                        placeholder="Location..."/>
                        <span className="input-group-btn">
                          <button className="btn btn-secondary search-button" type="submit"><i className="fa fa-search fa-lg" aria-hidden="true"></i></button>
                        </span>
                    </div>
                  </div>
                </form>
              </li>
              <li><a href="#">Link</a></li>
              <li className="dropdown" id="filter-bar-dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.priceRange} <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="container-fluid">
                      <div className="row row-width-300">
                        <div className="col-md-6" id="minPrice">
                          <label htmlFor="minPrice">Min Price</label>
                          <div className="input-group" id="minPrice">
                            <span className="input-group-addon" id="dollar-addon-1">$</span>
                            <input
                              aria-describedby="dollar-addon-1"
                              type="number"
                              className="form-control"
                              placeholder="Min"
                              value={this.props.minPrice}
                              onChange={this.handleChange("minPrice", this.props.updateFilter)}/>
                          </div>
                        </div>
                        <div className="col-md-6" >
                          <label htmlFor="maxPrice">Max Price</label>
                          <div className="input-group" id="maxPrice">
                            <span className="input-group-addon" id="dollar-addon-1">$</span>
                            <input
                              aria-describedby="dollar-addon-1"
                              type="number"
                              className="form-control"
                              placeholder="Max"
                              value={this.props.maxPrice}
                              onChange={this.handleChange("maxPrice", this.props.updateFilter)}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};

export default FilterBar;
//
//
// const _handleChange = (filter, updateFilter) => (
//   e => updateFilter(filter, e.currentTarget.value)
// )
//
// const FilterForm = ({minPrice, maxPrice, updateFilter}) => (
//   <div>
//     <span className="filter">Filter Results:</span>
//     <br/>
//     <label>Minimum Price </label>
//     <input type="number"
//            value={minPrice}
//            onChange={_handleChange('minPrice', updateFilter)}/>
//     <br/>
//     <label>Maximum Price </label>
//     <input type="number"
//            value={maxPrice}
//            onChange={_handleChange('maxPrice', updateFilter)}/>
//   </div>
