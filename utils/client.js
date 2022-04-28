import sanityClient from '@sanity/client';
import { PROJECT_ID, DATASET } from './config';

const client = sanityClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2021-10-21',
  useCdn: true,
});

export default client;
