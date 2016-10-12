import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactDOM from 'react-dom'

//Components
import HouseIndex from './house_index';
import HouseMap from './house_map';
import FilterForm from './filter_form';
import FilterBar from './filter_bar';
import Footer from './footer';
import MarkerManager from '../util/marker_manager';

//
// class Search extends React.Component {
//   componentDidMount(){
//     this.props.requestHouses();
//   }
//
//   render () {
//     return(
//     <div>
//       <HouseMap houses={this.props.houses} updateFilter={this.props.updateFilter}/>
//       <HouseIndex houses={this.props.houses}/>
//     </div>
//   )}
// };
//
// export default Search;

class Search extends React.Component{

  constructor(props){
    super(props)
    this.markers = []
    this.markerIdx = []
    this.onMouseOver = this.onMouseOver.bind(this);
    this.markerSaver = this.markerSaver.bind(this);
    this.findWithAttr = this.findWithAttr.bind(this);

    this.state = {
      markers: [],
      markerInx: []
    }
  }

  markerSaver(marker){
    //adding a ref to HouseMap was not working properly
    //Was not able to access the state or sub-refs of HouseMap
    //EX: this.refs.housemap.refs would be empty
    //    Defining a react component within this file WOULD allow this.refs.housemap.refs to have a value
    //use of Higher Order Functions may be the answer here
    this.mm = marker
    if(!!this.mm.markers[0]) {
      // this.mm.markers[0].setIcon("http://labs.google.com/ridefinder/images/mm_20_green.png")
      // this.state.markers=this.mm.markers
      // this.setState({markers: this.mm.markers})
      // console.log(this.state);
    }

  }

  findWithAttr(array, attr, value) {
      for(var i = 0; i < array.length; i += 1) {
          if(array[i][attr] === value) {
              return i;
          }
      }
      return -1;
  }

  componentWillReceiveProps(nextProps){
    // console.log(nextProps);

    // this.setState({markers2: this.refs.housemap.MarkerManager.markers})
  }

  componentDidUpdate(){
    this.markerIdx = []
    this.markers = this.refs.housemap.MarkerManager.markers
    this.markerManager = this.refs.housemap.MarkerManager
    this.houseMap = this.refs.housemap
    // console.log(this.markers);
    // const houseIds = Object.keys(this.props.houses)
    // if(this.markers.length > 0) {
    //   houseIds.forEach((id) => {
    //     // console.log(this.findWithAttr(this.markers, 'houseId', id));
    //     this.markerIdx.push(this.findWithAttr(this.markers, 'houseId', +id))
    //   })
    // }
    // console.log(this.markerIdx);


    // this.markerIdx = this.findWithAttr(markers, 'houseId', houses[houseKeys[i]].id)

    // if (this.refs.housemap.MarkerManager.markers.length > 0) {
    //   this.refs.housemap.MarkerManager.markers.forEach((marker) => {
    //     markerIdx.push(marker.houseId);
    //   })
    // }
    // console.log(markerIdx);
    // this.markers = this.refs.housemap.MarkerManager.markers
    // console.log(this.markers);
    // console.log(this.refs.search2.children);
    // console.log("end update");

  }

  onMouseOver(){
    // console.log(this);
    // console.log();

    // console.log(ReactDOM.findDOMNode(this.refs.search));
  }

  componentDidMount(){
        // this.props.requestHouses();
    // console.log(this.refs.housemap);
    // console.log(this.refs.search);
    // console.log(this.refs.housemap1.test);
    // console.log(ReactDOM.findDOMNode(this.refs.housemap1.test);
    // console.log(this.props.children);
    // console.log(this.props);
    // console.log(this._child)
    // console.log(this._child.test)

    // console.log(this.refs);
    // console.log(ReactDOM.findDOMNode(this.refs.housemap1));
    // console.log(this.refs.search);
    // console.log(this.refs.search.children);
    // console.log(this.refs.search.refs);

    // console.log(this.refs.housemap1);
    // console.log(this.refs.housemap1.refs);
    // console.log(this.refs.housemap1.refs.housemap2);

    // console.log(this.refs.testref);
    // console.log(this.refs.testref.refs);
    // console.log(this.refs.testref.refs.map);


    // console.log(this._input.refs);
    // console.log(this._input);

    // console.log(this.props);
    // console.log(ReactDOM.findDOMNode(this).parentNode);
  }
  //
  // onMouseEnter(){
  //   console.log("Enter!");
  // }
  //
  // onMouseLeave(){
  //   console.log("Leave!");
  // }
  //
  // onMouseOver(){
  //   console.log("Over!");
  // }

  render(){
    return(
      <div id="house-search-container" ref="search" onMouseOver={this.onMouseOver}>
        <div className="house-search-sidebar">

          <FilterForm
            minPrice={this.props.minPrice}
            maxPrice={this.props.maxPrice}
            minBeds={this.props.minBeds}
            maxBeds={this.props.maxBeds}
            minBaths={this.props.minBaths}
            maxBaths={this.props.maxBaths}
            minArea={this.props.minArea}
            maxArea={this.props.maxArea}
            updateFilter={this.props.updateFilter}
            updateMapOptions={this.props.updateMapOptions}/>
          <HouseIndex
            ref="houseindex"
            houses={this.props.houses}
            updateFilter={this.props.updateFilter}
            markers={this.props.markers}
            markerManager={this.markerManager}
            houseMap={this.houseMap}
            />
          <Footer/>
        </div>
        <div className="house-search-map">
          <HouseMap
            markerSaver={this.markerSaver}
            ref="housemap"
            mapOptions={this.props.mapOptions}
            houses={this.props.houses}
            updateFilter={this.props.updateFilter}
            singleHouse={false}
            updateMapOptions={this.props.updateMapOptions}
            receiveMarkers={this.props.receiveMarkers}
            />
        </div>
      </div>
    )
  }
};

export default Search;

// <FilterBar
//   minPrice={this.props.minPrice}
//   maxPrice={this.props.maxPrice}
//   updateFilter={this.props.updateFilter}/>

// <div className="container-fluid" id="search-container">
//   <div className="row">
//     <div className="col-md-5">
//       <HouseMap
//         houses={houses}
//         updateFilter={updateFilter}
//         singleHouse={false}/>
//     </div>
//     <div className="col-md-7">
//       <HouseIndex houses={houses}/>
//     </div>
//   </div>
// </div>
// </div>


// const Search = ({houses, minPrice, maxPrice, updateFilter, mapOptions}) => (
// <div id="house-search-container">
//   <FilterBar
//     searchRefs={"hi"}
//     minPrice={minPrice}
//     maxPrice={maxPrice}
//     updateFilter={updateFilter}/>
//   <div className="house-search-sidebar">
//     <div>
//       <h1>Find Properties Now!</h1>
//     </div>
//     <HouseIndex houses={houses}/>
//     <Footer/>
//   </div>
//   <div className="house-search-map">
//     <HouseMap
//       ref={(c) => this.tester}
//       mapOptions={mapOptions}
//       houses={houses}
//       updateFilter={updateFilter}
//       singleHouse={false}/>
//   </div>
// </div>
// )
