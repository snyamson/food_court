import imageBuilder from '@sanity/image-url';
import client from './client';

const urlForThumbnail = (source) => {
  return imageBuilder(client).image(source).height(270).url();
};

const urlFor = (source) => {
  return imageBuilder(client).image(source).url();
};

export { urlForThumbnail, urlFor };
