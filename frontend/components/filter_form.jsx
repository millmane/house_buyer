const React = require('react');

class FilterForm extends React.Component {
  constructor(props){
    super(props)
    this._handleChange = this._handleChange.bind(this)
    this._handleLocationChange = this._handleLocationChange.bind(this)

  }

    componentDidMount(){
      this.autocomplete = new google.maps.places.Autocomplete(
        (this.refs.mapSearch), {
          types: ['geocode']
      });
    }

  _handleChange(filter){
    return e => {
      e.preventDefault();
      this.props.updateFilter(filter, e.currentTarget.value)
    }
  }

  _handleLocationChange(){
    const lat = this.autocomplete.getPlace().geometry.location.lat()
    const lng = this.autocomplete.getPlace().geometry.location.lng()
    const center = {
      lat: lat,
      lng: lng
    }

    const options = {
      center: center,
      zoom: 13
    }
    this.props.updateMapOptions(options)
    // this.props.updateFilter("mapOptions", options)
  }

  render(){
    let minPrice = this.props.minPrice
    let maxPrice = this.props.maxPrice
    let minBeds = this.props.minBeds
    let maxBeds = this.props.maxBeds
    let minBaths = this.props.minBaths
    let maxBaths = this.props.maxBaths
    let minArea = this.props.minArea
    let maxArea = this.props.maxArea
    let updateFilter = this.props.updateFilter
    return(
      <div className="container-fluid filter-form-container">
        <div className="row">
          <label className="col-md-2 control-label price-label">Location</label>
          <div className="col-md-10">
            <div className="input-group" id="location-search">
              <input
                type="text"
                ref="mapSearch"
                className="form-control"
                placeholder="Location..."/>
              <span className="input-group-btn">
                <button onClick={this._handleLocationChange} className="btn btn-secondary search-button" type="submit"><i className="fa fa-search fa-lg" aria-hidden="true"></i></button>
              </span>
            </div>
          </div>
        </div>

        <hr className="filter-form-hr"></hr>

        <div className="row">
          <label className="col-md-2 control-label price-label">Price Range</label>
          <div className="col-md-5" id="minPrice">
            <label htmlFor="minPrice">Minimum</label>
            <div className="input-group" id="minPrice">
              <span className="input-group-addon" id="dollar-addon-1"><span className="glyphicon glyphicon-usd" aria-hidden="true"></span></span>
              <input
                type="number"
                defaultValue={minPrice}
                aria-describedby="dollar-addon-1"
                placeholder="min"
                className="form-control"
                onChange={this._handleChange('minPrice')}/>
            </div>
          </div>
          <div className="col-md-5" >
            <label htmlFor="maxPrice">Maximum</label>
            <div className="input-group" id="maxPrice">
              <span className="input-group-addon" id="dollar-addon-1"><span className="glyphicon glyphicon-usd" aria-hidden="true"></span></span>
              <input
                aria-describedby="dollar-addon-1"
                type="number"
                className="form-control"
                placeholder="Max"
                defaultValue={maxPrice}
                onChange={this._handleChange("maxPrice")}/>
            </div>
          </div>
        </div>

        <hr className="filter-form-hr"></hr>

        <div className="row">
          <label className="col-md-2 control-label price-label">Bedrooms</label>
          <div className="col-md-5" id="minBeds">
            <label htmlFor="minBeds">Minimum</label>
            <div className="input-group" id="minBeds">
              <span className="input-group-addon" id="bed-addon-1"><i className="fa fa-bed" aria-hidden="true"></i></span>
              <input
                type="number"
                value={minBeds}
                aria-describedby="bed-addon-1"
                placeholder="min"
                className="form-control"
                onChange={this._handleChange('minBeds')}/>
            </div>
          </div>
          <div className="col-md-5" >
            <label htmlFor="maxBeds">Maximum</label>
            <div className="input-group" id="maxBeds">
              <span className="input-group-addon" id="bed-addon-2"><i className="fa fa-bed" aria-hidden="true"></i></span>
              <input
                aria-describedby="bed-addon-2"
                type="number"
                className="form-control"
                placeholder="Max"
                value={maxBeds}
                onChange={this._handleChange("maxBeds")}/>
            </div>
          </div>
        </div>

        <hr className="filter-form-hr"></hr>

        <div className="row">
          <label className="col-md-2 control-label price-label">Bathrooms</label>
          <div className="col-md-5" id="minBaths">
            <label htmlFor="minBaths">Minimum</label>
            <div className="input-group" id="minBaths">
              <span className="input-group-addon" id="bath-addon-1"><i className="fa fa-leaf" aria-hidden="true"></i></span>
              <input
                type="number"
                value={minBaths}
                aria-describedby="bath-addon-1"
                placeholder="min"
                className="form-control"
                onChange={this._handleChange('minBaths')}/>
            </div>
          </div>
          <div className="col-md-5" >
            <label htmlFor="maxBaths">Maximum</label>
            <div className="input-group" id="maxBaths">
              <span className="input-group-addon" id="bath-addon-2"><i className="fa fa-leaf" aria-hidden="true"></i></span>
              <input
                aria-describedby="bath-addon-2"
                type="number"
                className="form-control"
                placeholder="Max"
                value={maxBaths}
                onChange={this._handleChange("maxBaths")}/>
            </div>
          </div>
        </div>

        <hr className="filter-form-hr"></hr>

        <div className="row">
          <label className="col-md-2 control-label price-label">Area</label>
          <div className="col-md-5" id="minBaths">
            <label htmlFor="minArea">Minimum</label>
            <div className="input-group" id="minArea">
              <input
                type="number"
                value={minArea}
                aria-describedby="area-addon-1"
                placeholder="min"
                className="form-control"
                onChange={this._handleChange('minArea')}/>
              <span className="input-group-addon" id="area-addon-1">sqft</span>
            </div>
          </div>
          <div className="col-md-5" >
            <label htmlFor="maxArea">Maximum</label>
            <div className="input-group" id="maxArea">
              <input
                aria-describedby="area-addon-2"
                type="number"
                className="form-control"
                placeholder="Max"
                value={maxArea}
                onChange={this._handleChange("maxArea")}/>
              <span className="input-group-addon" id="area-addon-2">sqft</span>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
//
// const _handleChange = (filter, updateFilter) => (
//   e => updateFilter(filter, e.currentTarget.value)
// )
//
// const FilterForm = ({minPrice, maxPrice, minBeds, maxBeds, minBaths, maxBaths, minArea, maxArea, updateFilter}) => (
//     <div className="container-fluid filter-form-container">
//       <div className="row">
//         <label className="col-md-2 control-label price-label">Price Range</label>
//         <div className="col-md-5" id="minPrice">
//           <label htmlFor="minPrice">Minimum</label>
//           <div className="input-group" id="minPrice">
//             <span className="input-group-addon" id="dollar-addon-1"><span className="glyphicon glyphicon-usd" aria-hidden="true"></span></span>
//             <input
//               type="number"
//               value={minPrice}
//               aria-describedby="dollar-addon-1"
//               placeholder="min"
//               className="form-control"
//               onChange={_handleChange('minPrice', updateFilter)}/>
//           </div>
//         </div>
//         <div className="col-md-5" >
//           <label htmlFor="maxPrice">Maximum</label>
//           <div className="input-group" id="maxPrice">
//             <span className="input-group-addon" id="dollar-addon-1"><span className="glyphicon glyphicon-usd" aria-hidden="true"></span></span>
//             <input
//               aria-describedby="dollar-addon-1"
//               type="number"
//               className="form-control"
//               placeholder="Max"
//               value={maxPrice}
//               onChange={_handleChange("maxPrice", updateFilter)}/>
//           </div>
//         </div>
//       </div>
//
//       <hr className="filter-form-hr"></hr>
//
//       <div className="row">
//         <label className="col-md-2 control-label price-label">Bedrooms</label>
//         <div className="col-md-5" id="minBeds">
//           <label htmlFor="minBeds">Minimum</label>
//           <div className="input-group" id="minBeds">
//             <span className="input-group-addon" id="bed-addon-1"><i className="fa fa-bed" aria-hidden="true"></i></span>
//             <input
//               type="number"
//               value={minBeds}
//               aria-describedby="bed-addon-1"
//               placeholder="min"
//               className="form-control"
//               onChange={_handleChange('minBeds', updateFilter)}/>
//           </div>
//         </div>
//         <div className="col-md-5" >
//           <label htmlFor="maxBeds">Maximum</label>
//           <div className="input-group" id="maxBeds">
//             <span className="input-group-addon" id="bed-addon-2"><i className="fa fa-bed" aria-hidden="true"></i></span>
//             <input
//               aria-describedby="bed-addon-2"
//               type="number"
//               className="form-control"
//               placeholder="Max"
//               value={maxBeds}
//               onChange={_handleChange("maxBeds", updateFilter)}/>
//           </div>
//         </div>
//       </div>
//
//       <hr className="filter-form-hr"></hr>
//
//       <div className="row">
//         <label className="col-md-2 control-label price-label">Bathrooms</label>
//         <div className="col-md-5" id="minBaths">
//           <label htmlFor="minBaths">Minimum</label>
//           <div className="input-group" id="minBaths">
//             <span className="input-group-addon" id="bath-addon-1"><i className="fa fa-leaf" aria-hidden="true"></i></span>
//             <input
//               type="number"
//               value={minBaths}
//               aria-describedby="bath-addon-1"
//               placeholder="min"
//               className="form-control"
//               onChange={_handleChange('minBaths', updateFilter)}/>
//           </div>
//         </div>
//         <div className="col-md-5" >
//           <label htmlFor="maxBaths">Maximum</label>
//           <div className="input-group" id="maxBaths">
//             <span className="input-group-addon" id="bath-addon-2"><i className="fa fa-leaf" aria-hidden="true"></i></span>
//             <input
//               aria-describedby="bath-addon-2"
//               type="number"
//               className="form-control"
//               placeholder="Max"
//               value={maxBaths}
//               onChange={_handleChange("maxBaths", updateFilter)}/>
//           </div>
//         </div>
//       </div>
//
//       <hr className="filter-form-hr"></hr>
//
//       <div className="row">
//         <label className="col-md-2 control-label price-label">Area</label>
//         <div className="col-md-5" id="minBaths">
//           <label htmlFor="minArea">Minimum</label>
//           <div className="input-group" id="minArea">
//             <input
//               type="number"
//               value={minArea}
//               aria-describedby="area-addon-1"
//               placeholder="min"
//               className="form-control"
//               onChange={_handleChange('minArea', updateFilter)}/>
//             <span className="input-group-addon" id="area-addon-1">sqft</span>
//           </div>
//         </div>
//         <div className="col-md-5" >
//           <label htmlFor="maxArea">Maximum</label>
//           <div className="input-group" id="maxArea">
//             <input
//               aria-describedby="area-addon-2"
//               type="number"
//               className="form-control"
//               placeholder="Max"
//               value={maxArea}
//               onChange={_handleChange("maxArea", updateFilter)}/>
//             <span className="input-group-addon" id="area-addon-2">sqft</span>
//
//           </div>
//         </div>
//       </div>
//
//     </div>
// );

export default FilterForm
