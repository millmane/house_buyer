import React from 'react';
import { Link } from 'react-router';
// Components
// import HouseDetail from './house_detail';
import HouseMap from './house_map';
import HouseDetail from './house_detail';
import Footer from './footer';
import Chart    from './chart.jsx';


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

class HouseShow extends React.Component{

  constructor(props){
    super(props)

    this.mapOptions = {
      center: {lat: this.props.houseLat, lng: this.props.houseLng},
      draggable: false,
      scrollwheel: false,
      zoom: 13
    }

    // this.mapOptions = {
    //   center: {lat: 30, lng: 30},
    //   draggable: false,
    //   scrollwheel: false,
    //   zoom: 13
    // }

    // console.log(this.props.house.priceHistory);
    // this.houses = {[this.props.houseId]: this.props.house};
    // console.log(this.props);
  }

  componentDidMount(){
    // this.mapOptions = {
    //   center: {lat: this.props.houseLat, lng: this.props.houseLng},
    //   draggable: false,
    //   scrollwheel: false,
    //   zoom: 13
    // }
    // console.log(this.props.houseId);
    this.props.requestHouse(this.props.houseId);
    // console.log(this.props.mapOptions);
    // this.props.updateFilter('mapOptions', this.mapOptions);

  }

  componentDidUpdate(){



    // console.log(this.props.houseLat);
    // console.log(this.props.house.price_history)

    // console.log(this.props);
    // console.log(this.props.house.price_history);


    // console.log(this.props.house.price_history);
    //
    // this.price_history = this.props.house.price_history

  }

  componentWillReceiveProps(nextProps){

    // this.mapOptions = {
    //   center: {lat: nextProps.houseLat, lng: nextProps.houseLng},
    //   draggable: false,
    //   scrollwheel: false,
    //   zoom: 13
    // }

    // this.props.updateFilter('mapOptions', this.mapOptions);
    // this.props.updateFilter('mapOptions', this.mapOptions);

    // this.setState({
    //   price_history: this.nextProps.house.price_history
    // })
  }

  render(){
    return(
      <div className="house-show-container">
        <div className="container-fluid">
          <div className="house-show-header">
            <div className="page-header">
              <h1>Property Details</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row house-show-row-top">
            <div className="col-md-6">
              <img className="house-detail-image" src={this.props.house.picture_url}/>
            </div>
            <div className="col-md-6">
              <div className="house-show-map">
                <HouseMap
                  houses={{[this.props.houseId]: this.props.house}}
                  houseId={this.props.houseId}
                  houseLat={this.props.houseLat}
                  houseLng={this.props.houseLng}
                  requestHouse={this.props.requestHouse}
                  updateFilter={this.props.updateFilter}
                  singleHouse={true}
                  mapOptions={this.props.mapOptions}
                  updateMapOptions={this.props.updateMapOptions}
                  />
              </div>
            </div>

          </div>

          <div className="row house-show-row-bottom">
            <div className="col-md-6">
              <HouseDetail house={this.props.house}/>
            </div>
            <div className="col-md-6">
              <Chart data={this.props.house.price_history || {}}/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

// const HouseShow = function({house, houseId, houseLat, houseLng, requestHouse, children, updateFilter}) {
//   const houses = {[houseId]: house};
//   const mapOptions = {
//     center: {lat: houseLat, lng: houseLng},
//     draggable: false,
//     scrollwheel: false,
//     zoom: 13
//   }
//
//   let data2 = {}
//   if (house.price_history) {
//     data2 = house.price_history;
//   }
//
//   return(
//     <div className="house-show-container">
//       <div className="container-fluid">
//         <div className="house-show-header">
//           <div className="page-header">
//             <h1>Property Details</h1>
//           </div>
//         </div>
//       </div>
//
//       <div className="container-fluid">
//         <div className="row house-show-row-top">
//           <div className="col-md-6">
//             <HouseDetail house={house}/>
//           </div>
//           <div className="col-md-6">
//             <Chart data={data2}/>
//           </div>
//         </div>
//
//         <div className="row house-show-row-bottom">
//           <div className="col-md-6">
//             <img className="house-detail-image" src={house.picture_url}/>
//           </div>
//           <div className="col-md-6">
//             <div className="house-show-map">
//               <HouseMap
//                 houses={houses}
//                 houseId={houseId}
//                 houseLat={houseLat}
//                 houseLng={houseLng}
//                 requestHouse={requestHouse}
//                 singleHouse={true}
//                 mapOptions={mapOptions}
//                 />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

export default HouseShow;

// <div className="row house-show-row">
//   <div className="col-md-6">
//     <HouseDetail house={house}/>
//   </div>
//   <div className="col-md-6">
//     <img className="house-detail-image" src={house.picture_url}/>
//   </div>
// </div>
//
//   <div className="row house-show-row">
//     <div className="col-md-6">
//       <div className="house-show-map">
//         <HouseMap
//           houses={houses}
//           houseId={houseId}
//           houseLat={houseLat}
//           houseLng={houseLng}
//           requestHouse={requestHouse}
//           singleHouse={true}
//           mapOptions={mapOptions}
//           />
//       </div>
//     </div>
//   </div>




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
