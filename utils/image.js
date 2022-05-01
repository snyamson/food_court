import imageBuilder from '@sanity/image-url';
import { useNextSanityImage } from 'next-sanity-image';
import client from './client';

const urlForThumbnail = (source) => {
  return imageBuilder(client).image(source).height(270).url();
};

const urlFor = (source) => {
  return imageBuilder(client).image(source).url();
};

const useImageProps = (source) => {
  return useNextSanityImage(client, source);
};

export { urlForThumbnail, urlFor, useImageProps };
