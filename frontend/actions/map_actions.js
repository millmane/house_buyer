export const MapConstants = {
  RECEIVE_MARKERS: "RECEIVE_MARKERS",
};

export const receiveMarkers = (markers) => ({
  type: MapConstants.RECEIVE_MARKERS,
  markers
});
