import { useCart } from 'react-use-cart';

const Cart = () => {
  const { items, removeItem, isEmpty } = useCart();

  return (
    <>
      <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              {true ? (
                <h3
                  style={{
                    textAlign: 'center',
                  }}
                >
                  Oops your cart is empty
                </h3>
              ) : (
                <div className="cart-list">
                  <table className="table">
                    <thead className="thead-primary">
                      <tr className="text-center">
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id} className="text-center">
                          <td className="product-remove">
                            <a onClick={() => removeItem(item?.id)}>
                              <span className="icon-close"></span>
                            </a>
                          </td>

                          <td className="image-prod">
                            <div
                              className="img"
                              style={{
                                backgroundImage: `url(${item?.image})`,
                                backgroundPosition: 'center center',
                              }}
                            ></div>
                          </td>

                          <td className="product-name">
                            <h3>{item?.name}</h3>
                            <p>
                              Far far away, behind the word mountains, far from
                              the countries
                            </p>
                          </td>

                          <td className="price">&#8373;{item?.price}</td>

                          <td className="quantity">
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                name="quantity"
                                className="quantity form-control input-number"
                                value={item?.quantity}
                                min="1"
                                max="100"
                                readOnly
                              />
                            </div>
                          </td>

                          <td className="total">&#8373;{item?.itemTotal}</td>
                        </tr>
                      ))}

                      {/* <!-- END TR--> */}

                      {/* <tr className="text-center">
                      <td className="product-remove">
                        <a href="#">
                          <span className="icon-close"></span>
                        </a>
                      </td>

                      <td className="image-prod">
                        <div
                          className="img"
                          style={{
                            backgroundImage: 'url("/assets/images/dish-2.jpg")',
                          }}
                        ></div>
                      </td>

                      <td className="product-name">
                        <h3>Grilled Ribs Beef</h3>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries
                        </p>
                      </td>

                      <td className="price">$15.70</td>

                      <td className="quantity">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            name="quantity"
                            className="quantity form-control input-number"
                            value="1"
                            min="1"
                            max="100"
                          />
                        </div>
                      </td>

                      <td className="total">$15.70</td>
                    </tr> */}
                      {/* <!-- END TR--> */}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
          {true && (
            <div className="row justify-content-end">
              <div className="col col-lg-3 col-md-6 mt-5 cart-wrap ">
                <div className="cart-total mb-3">
                  <h3>Cart Total</h3>
                  <p className="d-flex">
                    <span>Subtotal</span>
                    <span>$20.60</span>
                  </p>
                  <p className="d-flex">
                    <span>Delivery</span>
                    <span>$0.00</span>
                  </p>
                  <p className="d-flex">
                    <span>Discount</span>
                    <span>$3.00</span>
                  </p>
                  <hr />
                  <p className="d-flex total-price">
                    <span>Total</span>
                    <span>$17.60</span>
                  </p>
                </div>
                <p className="text-center">
                  <a href="checkout.html" className="btn btn-primary py-3 px-4">
                    Proceed to Checkout
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
