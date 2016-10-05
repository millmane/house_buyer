export const fetchHouses = (filters, success) => {
  $.ajax({
    method: 'GET',
    url: 'api/houses',
    data: filters,
    success,
    error: () => console.log('error')
  });
};

export const fetchHouse = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/houses/${id}`,
    success
  });
};

export const createHouse = (house, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/houses',
    data: house,
    success
  });
};
