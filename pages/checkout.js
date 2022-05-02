import { useCart } from 'react-use-cart';

const Checkout = () => {
  const { cartTotal } = useCart();
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 ">
              <form action="#" className="billing-form ftco-bg-dark p-3 p-md-5">
                <h3 className="mb-4 billing-heading">Delivery Details</h3>
                <div className="row align-items-end">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstname">Firt Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="location">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter location"
                      />
                    </div>
                  </div>

                  <div className="w-100"></div>
                  <div className="col-md-12">
                    <div className="form-group mt-4">
                      <div className="radio">
                        <label className="mr-3">
                          <input type="radio" name="account" /> Create an
                          Account?
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="row mt-5 pt-3 d-flex">
                <div className="col-md-6 d-flex">
                  <div className="cart-detail cart-total ftco-bg-dark p-3 p-md-4">
                    <h3 className="billing-heading mb-4">Cart Total</h3>
                    <p className="d-flex">
                      <span>Subtotal</span>
                      <span>&#8373;{cartTotal}</span>
                    </p>
                    <p className="d-flex">
                      <span>Delivery</span>
                      <span>&#8373;0.00</span>
                    </p>
                    <p className="d-flex">
                      <span>Discount</span>
                      <span>&#8373;0.00</span>
                    </p>
                    <hr />
                    <p className="d-flex total-price">
                      <span>Total</span>
                      <span>&#8373;{cartTotal}</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cart-detail ftco-bg-dark p-3 p-md-4">
                    <h3 className="billing-heading mb-4">Payment Method</h3>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="payment-method"
                              className="mr-2"
                            />
                            Pay on Delivery
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="payment-method"
                              className="mr-2"
                            />
                            Online Payment
                          </label>
                        </div>
                      </div>
                    </div>
                    <p>
                      <a href="#" className="btn btn-primary py-3 px-4">
                        Place an order
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 sidebar ">
              <div className="sidebar-box ">
                <div className="categories">
                  <h3>Categories</h3>

                  <li>
                    <a href="#">
                      Drinks <span>(42)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Foods <span>(14)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Desserts <span>(140)</span>
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
