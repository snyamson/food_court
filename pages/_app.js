import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../layout/layout"));
//import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
