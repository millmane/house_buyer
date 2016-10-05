import React from 'react';
import { Link } from 'react-router';
// Components
// import HouseDetail from './house_detail';
import HouseMap from './house_map';
import HouseDetail from './house_detail';
import Footer from './footer';
// import ReviewButton from './review_button';
//
// class HouseShow extends React.Component {
//   constructor(props){
//     super(props);
//   }
//
//   componentDidMount(){
//     this.props.requestHouse(this.props.houseId);
//   }
//
//   componentDidUpdate(){
//     console.log("updated");
//   }
//
//   render () {
//     return(
//       <div className="single-house-show">
//         {this.props.houseId}
//         <Link to="/houses/search" >Back to Houses Index</Link>
//         <HouseMap
//           houses={this.props.houses}
//           houseId={this.props.houseId}
//           houseLat={this.props.houseLat}
//           houseLng={this.props.houseLng}
//           requestHouse={this.props.requestHouse}
//           singleHouse={true}/>
//       </div>
//   )}
// };
//
// export default HouseShow;

const HouseShow = function({house, houseId, houseLat, houseLng, requestHouse, children, updateFilter}) {
  const houses = {[houseId]: house};
  const mapOptions = {
    center: {lat: houseLat, lng: houseLng},
    draggable: false,
    scrollwheel: false,
    zoom: 13
  }
  return(
    <div className="house-show-container">
      <div className="container-fluid">
        <div className="house-show-header">
          <div className="page-header">
            <h1>Property Details</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img className="house-detail-image" src={house.picture_url}/>
          </div>
          <div className="col-md-6">
            <div className="house-show-map">
              <HouseMap
                houses={houses}
                houseId={houseId}
                houseLat={houseLat}
                houseLng={houseLng}
                requestHouse={requestHouse}
                singleHouse={true}
                mapOptions={mapOptions}
                />
            </div>
          </div>
        </div>
          <HouseDetail house={house} />
        </div>

        <Footer/>

      </div>
  );
};

export default HouseShow;
// <div className="content-split-title">
//   <span>additional information</span>
// </div>
//
// <div className="single-house-show">
//   <HouseDetail house={house} />
//
//   <div className="single-house-map">
//     <Link to="/houses/search" >Back to Houses Index</Link>
//     <HouseMap
//       houses={houses}
//       houseId={houseId}
//       houseLat={houseLat}
//       houseLng={houseLng}
//       requestHouse={requestHouse}
//       singleHouse={true}
//       />
//   </div>
// </div>
// <div className="single-house-map">
//   <Link to="/" >Back to Housees Index</Link>
//   <HouseMap
//     houses={houses}
//     houseId={houseId}
//     singleHouse={true}
//     requestHouse={requestHouse}
//     />
// </div>
// <div className="right-half house-details">
//   <HouseDetail house={house} />
//   { children || <ReviewButton houseId={house.id} /> }
// </div>
