/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import client from '../../utils/client';
import { urlFor } from '../../utils/image';
import { AppStore } from '../../utils/store';

const Index = ({ productDetail }) => {
  const { pizzaPriceList } = AppStore.useState((s) => s);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSeletedSize] = useState(pizzaPriceList[0]?.size);
  const [price, setPrice] = useState();

  const handleIncrement = () => {
    setQuantity((value) => value + 1);
  };

  const handleDecrement = () => {
    setQuantity((value) => value - 1);
  };

  const handleSelectedSize = (e) => {
    setSeletedSize(e.target.value);
    const currentPizza = pizzaPriceList.filter(
      (item) => item.size === e.target.value
    );
    setPrice(currentPizza[0]?.price);
  };

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 ">
              <img
                src={urlFor(productDetail?.mainImage)}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6 product-details pl-md-5 ">
              <h3>{productDetail?.title}</h3>
              <p className="price">
                <span>&#8373;{price ? price : productDetail?.price}</span>
              </p>
              <p>{productDetail?.description}</p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="form-group d-flex">
                    <div className="select-wrap">
                      <div className="icon">
                        <span
                          className="ion-ios-arrow-down"
                          style={{ color: '#fff' }}
                        ></span>
                      </div>
                      {productDetail?.category.includes('Pizza') ? (
                        <select
                          name=""
                          id=""
                          value={selectedSize}
                          className="form-control"
                          onChange={handleSelectedSize}
                        >
                          {pizzaPriceList.map((priceList) => (
                            <option
                              key={priceList?._id}
                              value={priceList?.size}
                            >
                              {priceList?.size}
                            </option>
                          ))}
                        </select>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="input-group col-md-6 d-flex mb-3">
                  <span className="input-group-btn mr-2">
                    <button
                      type="button"
                      className="quantity-left-minus btn"
                      data-type="minus"
                      data-field=""
                      disabled={quantity <= 1 ? true : null}
                      onClick={handleDecrement}
                    >
                      <i className="icon-minus" style={{ color: '#fff' }}></i>
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    value={quantity}
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
                      onClick={handleIncrement}
                    >
                      <i className="icon-plus" style={{ color: '#fff' }}></i>
                    </button>
                  </span>
                </div>
              </div>
              <p>
                <a href="cart.html" className="btn btn-primary py-3 px-5">
                  Add to Cart
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const productDetail = await client.fetch(
    `*[_type == "foodProduct" && slug.current == $slug][0]{title,price, description, mainImage, "category":category[] -> title}`,
    { slug }
  );

  return {
    props: {
      productDetail,
    },
  };
}
