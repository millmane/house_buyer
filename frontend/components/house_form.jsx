import React from 'react';
import { withRouter } from 'react-router';
import UploadButton from './upload_button';

class HouseForm extends React.Component{
  constructor(props){
    super(props);
    this.coords = {lat: props.lat, lng: props.lng};
    this.address = props.address;
    this.state = {
      description: "",
      picture_url: "",
      user_id: props.currentUser.id,
      beds: 0,
      baths: 0,
      area: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.upload = this.upload.bind(this);
  }

  navigateToSearch() {
    this.props.router.push("/");
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.state.picture_url = results[0].url
        $('#picture_url').val(results[0].url);
        $('#picture_url').prop('disabled', true);
      }
    }.bind(this));
  }

  handleSubmit(e){
    e.preventDefault();
    const house = Object.assign({}, this.state, this.coords);
    this.props.createHouse({house});
    this.navigateToSearch();
  }

  render() {
    return (
      <div className="new-house-container">
        my address: {this.address}
        <div className="new-house-form">
          <h3 className="new-house-title">Create a House!</h3>

          <form onSubmit={this.handleSubmit}>
            <label className="house-field">Description</label>
            <input type="text"
                   value={this.state.description}
                   onChange={this.update("description")}
                   className="house-field"/>

            <label className="house-field">Picture URL</label>
            <button onClick={this.upload}>Upload new image!</button>
            <input type="text"
                   id="picture_url"
                   value={this.state.picture_url}
                   onChange={this.update("picture_url")}
                   className="house-field"/>

            <label className="house-field">Latitude</label>
            <input type="text"
                   disabled
                   value={this.coords.lat}
                   className="house-field"/>

            <label className="house-field">Longitude</label>
            <input type="text"
                   disabled
                   value={this.coords.lng}
                   className="house-field"/>

            <label className="house-field">Beds</label>
            <input type="text"
                   value={this.state.beds}
                   onChange={this.update("beds")}
                   className="house-field"/>

            <label className="house-field">Baths</label>
            <input type="text"
                   value={this.state.baths}
                   onChange={this.update("baths")}
                   className="house-field"/>

            <label className="house-field">Area</label>
            <input type="text"
                   value={this.state.area}
                   onChange={this.update("area")}
                   className="house-field"/>

            <div className="button-holder">
              <input type="submit"
                     value="Create House"
                     className="new-house-button"/>
            </div>
          </form>
          <div className="button-holder">
            <button className="new-house-button"
                    onClick={this.navigateToSearch}>
                    Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(HouseForm);
