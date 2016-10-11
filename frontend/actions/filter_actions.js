export const FilterConstants = {
  UPDATE_BOUNDS: "UPDATE_BOUNDS",
  UPDATE_FILTER: "UPDATE_FILTER",
  UPDATE_MAP_OPTIONS: "UPDATE_MAP_OPTIONS"
}

export const updateBounds = (bounds) => ({
  type: FilterConstants.UPDATE_BOUNDS,
  bounds
});

export const updateFilter = (filter, value) => ({
  type: FilterConstants.UPDATE_FILTER,
  filter,
  value
});

export const updateMapOptions = (options) => ({
  type: FilterConstants.UPDATE_MAP_OPTIONS,
  options
});
