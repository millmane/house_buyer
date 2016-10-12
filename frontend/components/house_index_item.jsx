import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import ReactDOM from 'react-dom'

// const handleClick = (router, url, house) => (
//   () => router.push({
//     pathname: url,
//     query: house
//   })
// )
class HouseIndexItem extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			marker: this.props.marker
		}
		this.handleClick = this.handleClick.bind(this)
		this.onMouseEnter = this.onMouseEnter.bind(this)
		this.onMouseLeave = this.onMouseLeave.bind(this)
		this.findWithAttr = this.findWithAttr.bind(this)

	}


	componentDidUpdate(){
		// console.log(this.props.marker);
	}

	componentWillReceiveProps(nextProps){
		this.setState({marker: nextProps.marker})

	}

	componentDidMount(){

		// console.log(this);
		// console.log(ReactDOM.findDOMNode(this));
	}
	handleClick(house){
		this.props.router.push("/houses/" + house.id)
		// hashHistory.push("/houses/" + house.id);
	}

	onMouseEnter(){
		if(!!this.props.markers) {
			let markerIdx = this.findWithAttr(this.props.markers, 'houseId', this.props.house.id)
			this.props.markers[markerIdx].setIcon("images/green-dot.png")
			this.props.markers[markerIdx].setAnimation(google.maps.Animation.BOUNCE);
		}
	}

	onMouseLeave(){
			if(!!this.props.markers) {
	    let markerIdx = this.findWithAttr(this.props.markers, 'houseId', this.props.house.id)
			this.props.markers[markerIdx].setIcon("images/red-dot.png")
			this.props.markers[markerIdx].setAnimation(-1);
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


	render(){
		const house = this.props.house
		// console.log(this.props.marker);
		return(
			<div className="house-index-item-container col-sm-12 row-space-2 col-md-6"
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}>
				<div className="house-index-item-img-container" onClick={() => this.handleClick(house)}>
					<img className="house-index-item-img img-responsive center-block" src={house.picture_url || "assets/1280x720.png"}/>
				</div>
				<div className="house-index-item-caption">
					<p className="house-index-item-details">
						<span className="house-index-item-price">Price: ${house.current_price} </span>
					</p>
					<p className="house-index-item-details-minor">
						<span><Link to={`/houses/${house.id}`} activeClassName="current">Details </Link></span>
						<i className="fa fa-circle" aria-hidden="true"></i>
						<span> Beds: {house.beds} </span>
						<i className="fa fa-circle" aria-hidden="true"></i>
						<span> Baths: {house.baths} </span>
						<i className="fa fa-circle" aria-hidden="true"></i>
						<span> Lat: {house.lat.toFixed(3)} </span>
						<i className="fa fa-circle" aria-hidden="true"></i>
						<span> Lng: {house.lng.toFixed(3)} </span>
					</p>
				</div>
			</div>
		)
	}
}

export default withRouter(HouseIndexItem);

// const handleClick = (house) => {
// 	hashHistory.push("/houses/" + house.id);
// };
//
// const HouseIndexItem = ({house}) => (
// 		<div className="house-index-item-container col-sm-12 row-space-2 col-md-6">
// 			<div className="house-index-item-img-container" onClick={() => handleClick(house)}>
// 				<img className="house-index-item-img img-responsive center-block" src={house.picture_url || "assets/1280x720.png"}/>
// 			</div>
// 			<div className="house-index-item-caption">
// 				<p className="house-index-item-details">
// 					<span className="house-index-item-price">Price: {house.price} </span>
// 				</p>
// 				<p className="house-index-item-details-minor">
// 					<span><Link to={`/houses/${house.id}`} activeClassName="current">Details </Link></span>
// 					<i className="fa fa-circle" aria-hidden="true"></i>
// 					<span> Beds: {house.beds} </span>
// 					<i className="fa fa-circle" aria-hidden="true"></i>
// 					<span> Baths: {house.baths} </span>
// 					<span>Lat: {house.lat.toFixed(3)} Lng: {house.lng.toFixed(3)}</span>
//
// 				</p>
// 			</div>
// 		</div>
// );
