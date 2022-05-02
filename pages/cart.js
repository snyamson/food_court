import Link from 'next/link';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const { items, removeItem, isEmpty, updateItemQuantity, cartTotal } =
    useCart();

  return (
    <>
      <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              {isEmpty ? (
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
                            <h3>
                              {item?.name} {item?.size && `(${item.size})`}
                            </h3>
                            <p>
                              Far far away, behind the word mountains, far from
                              the countries
                            </p>
                          </td>

                          <td className="price">&#8373;{item?.price}</td>

                          <td className="quantity">
                            <div className="input-group mb-3">
                              <span className="input-group-btn mr-2">
                                <button
                                  type="button"
                                  className="quantity-left-minus btn"
                                  data-type="minus"
                                  data-field=""
                                  disabled={item?.quantity <= 1 ? true : null}
                                  onClick={() =>
                                    updateItemQuantity(
                                      item.id,
                                      item?.quantity - 1
                                    )
                                  }
                                >
                                  <i
                                    className="icon-minus"
                                    style={{ color: '#fff' }}
                                  ></i>
                                </button>
                              </span>
                              <input
                                type="text"
                                id="quantity"
                                name="quantity"
                                className="form-control input-number"
                                value={item?.quantity}
                                readOnly
                                min="1"
                                max="100"
                              />
                              <span className="input-group-btn ml-2">
                                <button
                                  type="button"
                                  className="quantity-right-plus btn"
                                  data-type="plus"
                                  data-field=""
                                  onClick={() =>
                                    updateItemQuantity(
                                      item.id,
                                      item?.quantity + 1
                                    )
                                  }
                                >
                                  <i
                                    className="icon-plus"
                                    style={{ color: '#fff' }}
                                  ></i>
                                </button>
                              </span>
                            </div>
                          </td>

                          <td className="total">&#8373;{item?.itemTotal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
          {!isEmpty && (
            <div className="row justify-content-end">
              <div className="col col-lg-3 col-md-6 mt-5 cart-wrap ">
                <div className="cart-total mb-3">
                  <h3>Cart Total</h3>
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
                <p className="text-center">
                  <Link href="/checkout">
                    <a className="btn btn-primary py-3 px-4">
                      Proceed to Checkout
                    </a>
                  </Link>
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
