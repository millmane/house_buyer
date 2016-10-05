export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    this._createMarkerFromHouse = this._createMarkerFromHouse.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(houses){
    this.houses = houses;
    this._housesToAdd().forEach(this._createMarkerFromHouse);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _housesToAdd(){
    const currentHouseIds = this.markers.map ( marker => marker.houseId.toString())
    const newHouses = this.houses;
    const newHouseIds = Object.keys(newHouses);

    return newHouseIds.reduce( (collection, houseId) => {
      if (!currentHouseIds.includes(houseId)) {
        return ( collection.concat( [newHouses[houseId]] ));
      } else {
        return collection
      }
    }, []);
  }

  _markersToRemove(){
    return this.markers.filter( marker => {
      return !this.houses.hasOwnProperty(marker.houseId);
    });
  }

  _createMarkerFromHouse(house){
    const pos = new google.maps.LatLng(house.lat, house.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      houseId: house.id,
      //the flicker is a known bug.  marker appears at final position briefly, then drops
      animation: google.maps.Animation.DROP,
      //optimized: false may help some, not sure
      optimized: false,
      icon: "images/red-dot.png"
    });
    const activeIcon = "images/green-dot.png";
    const idleIcon = "images/red-dot.png";
    // marker.setIcon(idleIcon);
    marker.addListener('click', () => {this.handleClick(marker, house)});
    google.maps.event.addListener(marker,'mouseover', () => {marker.setIcon(activeIcon)});
    google.maps.event.addListener(marker,'mouseout', () => {marker.setIcon(idleIcon)});


    this.markers.push(marker);

  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
