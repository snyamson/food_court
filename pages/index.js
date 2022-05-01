import dynamic from 'next/dynamic';
import Head from 'next/head';
const Banner = dynamic(() => import('../components/Banner'));
const Info = dynamic(() => import('../components/Info'));
const HomeMenu = dynamic(() => import('../components/HomeMenu'));
const HomeSpecial = dynamic(() => import('../components/HomeSpecial'));
const Features = dynamic(() => import('../components/Features'));
const Post = dynamic(() => import('../components/Post'));

import client from '../utils/client';

export default function Home({ foodProduct, foodCategory }) {
  return (
    <>
      <Head>
        <title>Priscy food court</title>
        <meta name="description" content="Food Ordering app" />
        <link rel="icon" href="/assets/images/logo.jpg" />
      </Head>
      <Banner />
      <Info />
      <HomeMenu foodCategory={foodCategory} foodProduct={foodProduct} />
      <Features />
      <HomeSpecial foodProduct={foodProduct} />
      <Post />
    </>
  );
}

export async function getStaticProps() {
  const foodProduct = await client.fetch(
    `*[_type == "foodProduct"]{_id, title,slug,price, description, mainImage, "category":category[] -> title}`
  );

  const foodCategory = await client.fetch(
    `*[_type == "foodCategory"]{_id, title}`
  );

  return {
    props: {
      foodProduct,
      foodCategory,
    },
  };
}
