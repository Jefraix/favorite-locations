const GOOGLE_API_KEY = "LOLEILO";

const MAP_PREVIEW_BASE_URL = "https://google.api/maps/api/staticmap?";

const getMapPreview = (lat, lng) => {
  const zoom = 14;

  const width = 400;
  const height = 200;

  const imagePreviewURL =
    MAP_PREVIEW_BASE_URL +
    `center=${lat},${lng}` +
    `&zoom=${14}` +
    `&size=${width}x${height}` +
    `&maptype=roadmap` +
    `&markers=color:red%7Clabel:S%7C${lat},${lng}` +
    `&key=${GOOGLE_API_KEY}`;
};
