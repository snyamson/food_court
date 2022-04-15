import dynamic from "next/dynamic";
const MenuHead = dynamic(() => import("../containers/MenuHead"));

const HomeSpecial = () => {
  return (
    <>
      <section className="ftco-section">
        <div className="container ">
          <div className="row justify-content-center mb-5 pb-3">
            <MenuHead menuTitle="Delicious Starters" subTitle="Priscy" />
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="menu-entry">
                <a
                  href="#"
                  className="img"
                  style={{
                    backgroundImage: 'url("/assets/images/menu-1.jpg")',
                  }}
                ></a>
                <div className="text text-center pt-4">
                  <h3>
                    <a href="#">Coffee Capuccino</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                  <p className="price">
                    <span>&#8373;5.90</span>
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-outline-primary">
                      Add to Cart
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="menu-entry">
                <a
                  href="#"
                  className="img"
                  style={{
                    backgroundImage: 'url("/assets/images/menu-2.jpg")',
                  }}
                ></a>
                <div className="text text-center pt-4">
                  <h3>
                    <a href="#">Coffee Capuccino</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                  <p className="price">
                    <span>&#8373;5.90</span>
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-outline-primary">
                      Add to Cart
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="menu-entry">
                <a
                  href="#"
                  className="img"
                  style={{
                    backgroundImage: 'url("/assets/images/menu-3.jpg")',
                  }}
                ></a>
                <div className="text text-center pt-4">
                  <h3>
                    <a href="#">Coffee Capuccino</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                  <p className="price">
                    <span>&#8373;5.90</span>
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-outline-primary">
                      Add to Cart
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="menu-entry">
                <a
                  href="#"
                  className="img"
                  style={{
                    backgroundImage: 'url("/assets/images/menu-4.jpg")',
                  }}
                ></a>
                <div className="text text-center pt-4">
                  <h3>
                    <a href="#">Coffee Capuccino</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                  </p>
                  <p className="price">
                    <span>&#8373;5.90</span>
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-outline-primary">
                      Add to Cart
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSpecial;
