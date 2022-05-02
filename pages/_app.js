import dynamic from 'next/dynamic';
import { Router } from 'next/router';
import { CartProvider } from 'react-use-cart';
import { ToastContainer } from 'react-toastify';
import NProgress from 'nprogress';
const Layout = dynamic(() => import('../layout/layout'));
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/nprogress.css';

function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`);

    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });

  return (
    <>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </CartProvider>
    </>
  );
}

export default MyApp;
