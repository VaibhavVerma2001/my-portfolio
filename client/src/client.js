// here we connect sanity with our frontend

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// run sanity manage to see this, in backwnd path
export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_PROJECT_TOKEN
});


// For images
const builder = imageUrlBuilder(client);

export const urlFor = (source)=> builder.image(source);