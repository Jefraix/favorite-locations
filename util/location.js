const GOOGLE_API_KEY = "AIzaSyD4hW6A7tCfas6wYn38AKulNWskuW7t-mQ";

const MAP_PREVIEW_BASE_URL = "https://maps.googleapis.com/maps/api/staticmap?";
const REVERSE_GEOCODE_BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?'

export const getMapPreview = (lat, lng) => {
  const zoom = 14;

  const width = 400;
  const height = 200;

  const imagePreviewURL =
    MAP_PREVIEW_BASE_URL +
    `center=${lat},${lng}` +
    `&zoom=${zoom}` +
    `&size=${width}x${height}` +
    `&markers=color:red%7Clabel:S%7C${lat},${lng}` +
    `&key=${GOOGLE_API_KEY}`;

  return imagePreviewURL
};

export const getAddress = async (lat, lng) => {
  const url = 
    REVERSE_GEOCODE_BASE_URL + 
    `latlng=${lat},${lng}` + 
    `&key=${GOOGLE_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch address!');
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}
