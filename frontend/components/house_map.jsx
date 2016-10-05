import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactDOM from 'react-dom'

import MarkerManager from '../util/marker_manager';
  //
  // let _mapOptions = {
  //   center: {lat: 37.7758, lng: -122.435},
  //   zoom: 13
  // };

  const _getCoordsObj = function(latLng) {
    return ({
      lat: latLng.lat(),
      lng: latLng.lng()
    });
  };

  class HouseMap extends React.Component{
    constructor(props){
      super(props);
      // this.mapOptions = this.props.mapOptions || {
      //   center: {lat: 37.7758, lng: -122.435},
      //   zoom: 13
      // };
      this.handleChange = this.handleChange.bind(this);
      this.geocoder = new google.maps.Geocoder;
      this.infowindow = new google.maps.InfoWindow;
      this.geocodeLatLng = this.geocodeLatLng.bind(this);

    }
    handleChange(){
      console.log("housemap handlechange");
    }

    componentDidMount(){

      this.mapOptions = this.props.mapOptions || {}
      // this.mapOptions = {
      //   center: this.props.mapOptions.center,
      //   zoom: 13
      // }
      const mapDOMNode = this.refs.map
      this.map = new google.maps.Map(mapDOMNode, this.mapOptions);
      this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));

      if(this.props.singleHouse){
        // this.map.setOptions({
        //   center: {lat: this.props.houseLat, lng: this.props.houseLng},
        //   draggable: false
        // })
        this.props.requestHouse(this.props.houseId);
      } else {
        this.props.markerSaver(this.MarkerManager)

        // this.map.setOptions(this.mapOptions)
        this._registerListeners();
        // this.MarkerMan ager.updateMarkers(this.props.houses);
      }
    }

    componentWillReceiveProps(nextProps){
      // console.log("next props");
      // console.log(nextProps);
    }

    componentDidUpdate(){

      this.map.setOptions(this.props.mapOptions);

      this.MarkerManager.updateMarkers(this.props.houses);
      if (!!this.props.markerSaver) {
        this.props.markerSaver(this.MarkerManager)
      }

    }

    _registerListeners() {
      google.maps.event.addListener(this.map, 'idle', () => {
        const mapBounds = this.map.getBounds();
        const northEast = _getCoordsObj(mapBounds.getNorthEast());
        const southWest = _getCoordsObj(mapBounds.getSouthWest());
        const bounds = { northEast, southWest };
        const center = {
          lat: this.map.getCenter().lat(),
          lng: this.map.getCenter().lng()
        };
        const zoom = this.map.getZoom();
        const options = {
          center,
          zoom
        }
        // let clat = (southWest.lat + northEast.lat)/2
        // let clng = (southWest.lng + northEast.lng)/2
        //
        // this.map.setOptions({
        //   center: {lat: clat, lng: clng},
        //   zoom: 13
        // })

        this.props.updateFilter('bounds', bounds);
        this.props.updateFilter('mapOptions', options);
      });

      google.maps.event.addListener(this.map, 'click', event => {
        const coords = _getCoordsObj(event.latLng);
        // console.log(this.geocodeLatLng(this.geocoder, this.infowindow));
        // const address = this.geocodeLatLng(this.geocoder, this.infowindow).formatted_address;
        // const query = {
        //   coords,
        //   address
        // }
        this._handleClick(coords);
      });
    }

    geocodeLatLng(geocoder, infowindow, coords, router) {
          // var input = document.getElementById('latlng').value;
          // var latlngStr = input.split(',', 2);
  // 40.714224,-73.961452
          // var latlng = {lat: 40.714224, lng: -73.961452};
          // geocoder.geocode({'location': latlng}, function(results, status) {

          geocoder.geocode({'location': coords}, function(results, status) {
            if (status === 'OK') {
              if (results[1]) {
                let address = results[1].formatted_address;
                console.log(address);
                router.push({
                  pathname: "houses/new",
                  query: {
                    lat: coords.lat,
                    lng: coords.lng,
                    address: address

                  }
                });
                console.log(results[1]);
                return results[1];
                // map.setZoom(11);
                // var marker = new google.maps.Marker({
                //   position: latlng,
                //   map: map
                // });
                // infowindow.setContent(results[1].formatted_address);
                // infowindow.open(map, marker);
              } else {
                window.alert('No results found');
              }
            } else {
              window.alert('Geocoder failed due to: ' + status);
            }
          });
        }

    _handleClick(coords) {
      this.geocodeLatLng(this.geocoder, this.infowindow, coords, this.props.router)

      // const address = this.geocodeLatLng(this.geocoder, this.infowindow).formatted_address)
      // this.props.router.push({
      //   pathname: "houses/new",
      //   query: coords
      // });
    }

    _handleMarkerClick(marker, house){

      let infoWindow = new google.maps.InfoWindow();
      let redirect = function () {
        this.props.router.push("houses/" + house.id );
      }
      let html =  '<div id="iw-container">' +
                    '<div class="iw-title">Price: ' + house.price + '</div>' +
                    '<div class="iw-title"><a href="#/houses/' + house.id + '">More Details</a> </div>' +
                    '</div>'
                  //   <p className="house-index-item-details-minor">
                  //     <span><Link to={`/houses/${house.id}`} activeClassName="current">Details </Link></span>
                  //     <i className="fa fa-circle" aria-hidden="true"></i>
                  //     <span> Beds: {house.beds} </span>
                  //     <i className="fa fa-circle" aria-hidden="true"></i>
                  //     <span> Baths: {house.baths} </span>
                  //     <span>Lat: {house.lat.toFixed(3)} Lng: {house.lng.toFixed(3)}</span>
                  //   </p>
                  // </div>

      infoWindow.setContent(html);
      infoWindow.open(this.map, marker);
      // console.log(house.price);

      // this.props.router.push("houses/" + house.id );
    }

    render(){
      return (
        <div id="map-container-search" ref="map"></div>
      )
    }
  };

  export default withRouter(HouseMap);
