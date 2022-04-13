/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          {/* Favicon  */}
          {/* <link rel="icon" href="/favicon.svg" /> */}

          {/* Libraries Stylesheet  */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Great+Vibes"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="../assets/css/open-iconic-bootstrap.min.css"
          />
          <link rel="stylesheet" href="../assets/css/animate.css" />

          <link rel="stylesheet" href="../assets/css/owl.carousel.min.css" />
          <link
            rel="stylesheet"
            href="../assets/css/owl.theme.default.min.css"
          />
          <link rel="stylesheet" href="../assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="../assets/css/aos.css" />

          <link rel="stylesheet" href="../assets/css/ionicons.min.css" />

          <link
            rel="stylesheet"
            href="../assets/css/bootstrap-datepicker.css"
          />
          <link rel="stylesheet" href="../assets/css/jquery.timepicker.css" />

          <link rel="stylesheet" href="../assets/css/flaticon.css" />
          <link rel="stylesheet" href="../assets/css/icomoon.css" />
          <link rel="stylesheet" href="../assets/css/style.css" />

          {/* JavaScript Libraries  */}

          <script defer src="../assets/js/jquery.min.js"></script>
          <script defer src="../assets/js/jquery-migrate-3.0.1.min.js"></script>
          <script defer src="../assets/js/popper.min.js"></script>
          <script defer src="../assets/js/bootstrap.min.js"></script>
          <script defer src="../assets/js/jquery.easing.1.3.js"></script>
          <script defer src="../assets/js/jquery.waypoints.min.js"></script>
          <script defer src="../assets/js/jquery.stellar.min.js"></script>
          <script defer src="../assets/js/owl.carousel.min.js"></script>
          <script
            defer
            src="../assets/js/jquery.magnific-popup.min.js"
          ></script>
          <script defer src="../assets/js/aos.js"></script>
          <script defer src="../assets/js/jquery.animateNumber.min.js"></script>
          <script defer src="../assets/js/bootstrap-datepicker.js"></script>
          <script defer src="../assets/js/jquery.timepicker.min.js"></script>
          <script defer src="../assets/js/scrollax.min.js"></script>
          <script
            defer
            src="../assets/https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"
          ></script>

          {/* Javascript  */}
          <script defer src="../assets/js/google-map.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
