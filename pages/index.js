import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect } from 'react';
const Banner = dynamic(() => import('../components/Banner'));
const Info = dynamic(() => import('../components/Info'));
const HomeMenu = dynamic(() => import('../components/HomeMenu'));
const HomeSpecial = dynamic(() => import('../components/HomeSpecial'));
const Features = dynamic(() => import('../components/Features'));
const Post = dynamic(() => import('../components/Post'));
const Loader = dynamic(() => import('../components/Loader'));

import { AppStore } from '../utils/store';
import client from '../utils/client';

export default function Home() {
  const { loading, error } = AppStore.useState((s) => s);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const foodProduct = await client.fetch(
          `*[_type == "foodProduct"]{_id, title,slug,price, description, mainImage, "category":category[] -> title}`
        );
        const pizzaPriceList = await client.fetch(
          `*[_type == "pizzaPriceList"]{_id, size, price}`
        );
        const foodCategory = await client.fetch(
          `*[_type == "foodCategory"]{_id, title}`
        );
        AppStore.update((s) => {
          (s.foodProduct = foodProduct),
            (s.pizzaPriceList = pizzaPriceList),
            (s.foodCategory = foodCategory),
            (s.loading = false);
        });
      } catch (err) {
        AppStore.update((s) => {
          (s.error = err), (s.loading = false);
        });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        alert(error)
      ) : (
        <>
          <Head>
            <title>Priscy food court</title>
            <meta name="description" content="Food Ordering app" />
            <link rel="icon" href="/assets/images/logo.jpg" />
          </Head>
          <Banner />
          <Info />
          <HomeMenu />
          <Features />
          <HomeSpecial />
          <Post />
        </>
      )}
    </>
  );
}
