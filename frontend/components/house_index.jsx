import React from 'react';
import HouseIndexItem from './house_index_item'
  class HouseIndex extends React.Component{
    // componentDidMount(){
    //   this.props.requestHouses();
    // }
    constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this);
      this.findWithAttr = this.findWithAttr.bind(this);
    }

    handleClick(){
      const mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      }

      this.props.updateFilter("mapOptions", mapOptions)
    }

    findWithAttr(array, attr, value) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }

    render(){
      const houses = this.props.houses;
      const houseKeys = Object.keys(houses);
      const markers = this.props.markers
      let result = <h1>No Properties Here! Try searching in <a className="sanfran-link" onClick={this.handleClick}>San Francisco.</a></h1>;

      if (houseKeys.length !== 0) {
        result = [];
        for (var i = 0; i < houseKeys.length; i+=1) {
          let markerIdx = this.findWithAttr(markers, 'houseId', houses[houseKeys[i]].id)
          let marker = markers[markerIdx];
          result.push(<HouseIndexItem marker={marker} key={i} house={houses[houseKeys[i]]}/>)
        }
      }

      return (
        <div className="house-index-container">
          <div className="row">
            {result}
          </div>
        </div>
      )
    }
  };

  export default HouseIndex;
  // {houses && houseKeys.map( key => {
  //   return (
  //     <div className="col-md-6">
  //       <HouseIndexItem key={houses[key].id} house={houses[key]}/>
  //     </div>
  //   )
  // })}
