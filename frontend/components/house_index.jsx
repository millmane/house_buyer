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
      this.onMouseEnter = this.onMouseEnter.bind(this);
  		this.onMouseLeave = this.onMouseLeave.bind(this);

      this.state = {
        markers: []
      }
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

    onMouseEnter(marker){
  		if(!!marker) {
  			marker.setIcon("images/green-dot.png")
  			marker.setAnimation(google.maps.Animation.BOUNCE);
  		}
  	}

  	onMouseLeave(marker){
  		if(!!marker) {
  			marker.setIcon("images/red-dot.png")
  			marker.setAnimation(-1);
  		}
  	}

    componentDidUpdate(){

    }

    componentWillReceiveProps(nextProps){
      // this.setState({markers: nextProps.markers})
      // this.setState({markers: nextProps.markers2})
    }

    render(){
      // console.log(this.props.markerManager);
      // console.log(this.props.houseMap);
      // if (this.props.houseMap) {
      //   this.props.houseMap.MarkerManager.markers.forEach((marker)=>{
      //     console.log(marker);
      //   })
      // }
      const houses = this.props.houses;
      const houseKeys = Object.keys(houses);
      // const markers = houseKeys.length

      let markers = this.props.markers || []
      let result = <h1>No Properties Here! Try searching in <a className="sanfran-link" onClick={this.handleClick}>San Francisco.</a></h1>;
      if (houseKeys.length > 0) {
        result = [];

        houseKeys.forEach((key, i) => {
          result.push(<HouseIndexItem key={i} house={houses[key]}
            markers={markers}
            />)
        })
        // markers.forEach((marker, i) => {
        //   result.push(<HouseIndexItem marker={marker}
        //     key={i} house={houses[marker.houseId]}
        //     onMouseEnter={() => {this.onMouseEnter(this.state.markers[0])}}
        //     onMouseLeave={() => {this.onMouseLeave(this.state.markers[0])}}
        //     />)
        // })
      }

      // let result = <h1>No Properties Here! Try searching in <a className="sanfran-link" onClick={this.handleClick}>San Francisco.</a></h1>;
      // if (houseKeys.length !== 0) {
      //   result = [];
      //   for (var i = 0; i < houseKeys.length; i+=1) {
      //     let markerIdx = this.findWithAttr(markers2, 'houseId', houses[houseKeys[i]].id)
      //     let marker = markers2[markerIdx];
      //     result.push(<HouseIndexItem marker={marker}
      //       key={i} house={houses[houseKeys[i]]}
      //       onMouseEnter={() => {this.onMouseEnter(this.state.markers[0])}}
      //       onMouseLeave={() => {this.onMouseLeave(this.state.markers[0])}}
      //       />)
      //   }
      // }

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
