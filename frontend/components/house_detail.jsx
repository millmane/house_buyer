import React from 'react';
import ReactDOM from 'react-dom'

import HouseMap from './house_map';
import { Link } from 'react-router';
import Footer from './footer';
import Chart    from './chart.jsx';
import d3 from 'd3';

const HouseDetail = ({house}) => {

  let owner = "No Owner"
  if (house.user) {
    owner = house.user.username
  }
  var parseDate = d3.time.format("%d-%b-%y").parse;
  if (house.prices) {
    const a = parseDate("1-May-12")
    const b = new Date(house.prices[0].date)

  }

  //causes error "components children should not be mutated"
  const lat = Math.round(parseFloat(house.lat) * 10000) / 10000;
  const lng = Math.round(parseFloat(house.lng) * 10000) / 10000;
  // const data = [[0,0],[1,1],[2,2],[3,3],[100,10]]
  // let data = []
  let data2 = {}
  // let data = [[0,0],[1,1],[2,2],[3,3],[100,10]]
  // if (house.prices) {
  //   data = house.prices.map( (price, i) => {
  //     return (
  //       [new Date(price.date), price.price]
  //     )
  //   }).reverse()
  // }

  if (house.price_history) {
    data2 = house.price_history;
  }

  return(
    <div className="house-detail-container">
      <div className="row">
        <div className="col-md-12">
          <h4>About This Listing</h4>
          <p>{house.description}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h4>The Space</h4>
          <div className="house-detail-space-col">
            <ul>
              <li className="house-detail-li">Current Price: <strong>${Math.round(house.current_price,0)}</strong></li>
              <li className="house-detail-li">Latitude: <strong>{lat}</strong></li>
              <li className="house-detail-li">Longitude: <strong>{lng}</strong></li>
              <li className="house-detail-li">Owner: <strong>{owner}</strong></li>
            </ul>
          </div>
          <div className="house-detail-space-col">
            <ul>
              <li className="house-detail-li">Beds: <strong>{house.beds}</strong></li>
              <li className="house-detail-li">Baths: <strong>{house.baths}</strong></li>
              <li className="house-detail-li">Area: <strong>{house.area} sqft</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetail;
