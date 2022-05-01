import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../layout/layout'));
import '../styles/globals.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CartProvider } from 'react-use-cart';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
