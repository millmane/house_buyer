import React from 'react';
import { Link } from 'react-router';
import Footer from './footer'

const HouseDetail = function({house}) {
  let owner = "No Owner"
  if (house.user) {
    owner = house.user.username
  }

  //causes error "components children should not be mutated"
  const lat = Math.round(parseFloat(house.lat) * 10000) / 10000;
  const lng = Math.round(parseFloat(house.lng) * 10000) / 10000;

  return(
    <div className="row house-detail-container">
      <div className="col-md-6">
        <h4>About This Listing</h4>
        <p>{house.description}</p>
      </div>

      <div className="col-md-6">
        <h4>The Space</h4>
          <div className="col-md-6">
            <ul>
              <li>Price: <strong>${house.price}</strong></li>
              <li>Latitude: <strong>{lat}</strong></li>
              <li>Longitude: <strong>{lng}</strong></li>
              <li>Owner: <strong>{owner}</strong></li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Beds: <strong>{house.beds}</strong></li>
              <li>Baths: <strong>{house.baths}</strong></li>
              <li>Area: <strong>{house.area} sqft</strong></li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default HouseDetail;
