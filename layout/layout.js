import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Footer = dynamic(() => import("../components/Footer"));
const Loader = dynamic(() => import("../components/Loader"));

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
      {/* <Loader /> */}
    </>
  );
};

export default Layout;
