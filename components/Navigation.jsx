import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <Link href="/">
            <a className="navbar-brand" href="">
              <Image
                src="/assets/images/logo.jpg"
                alt=""
                height={50}
                width={100}
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span>
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/menu">
                  <a className="nav-link">Menu</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/post">
                  <a className="nav-link">Blog</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
              <li className="nav-item cart">
                <Link href="/cart">
                  <a className="nav-link">
                    <span className="icon icon-shopping_cart"></span>
                    <span className="bag d-flex justify-content-center align-items-center">
                      <small>1</small>
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
