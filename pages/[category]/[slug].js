/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import client from '../../utils/client';
import { urlForThumbnail, useImageProps } from '../../utils/image';
import axios from 'axios';
import { useCart } from 'react-use-cart';

const Index = ({ productDetail, pizzaPriceList }) => {
  const { addItem, items } = useCart();
  const [selectedSize, setSelectedSize] = useState(pizzaPriceList[0]?.size);
  const [price, setPrice] = useState(productDetail?.price);

  const handleSelectedSize = (e) => {
    setSelectedSize(e.target.value);
    const currentPizza = pizzaPriceList.filter(
      (item) => item.size === e.target.value
    );
    setPrice(currentPizza[0]?.price);
  };

  const addToCartHandler = async () => {
    const { data } = await axios.get(`/api/product/${productDetail._id}`);

    const newItem = {
      id: data._id,
      name: data.title,
      slug: data.slug.current,
      price: data.price,
      image: urlForThumbnail(data.mainImage),
    };

    addItem(newItem);

    console.log(newItem.name + ' added to cart');
  };

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 ">
              <Image
                {...useImageProps(productDetail?.mainImage)}
                height={650}
                width={800}
                alt={productDetail?.title}
              />
            </div>
            <div className="col-lg-6 product-details pl-md-5 ">
              <h3>{productDetail?.title}</h3>
              <p className="price">
                <span>&#8373;{price}</span>
              </p>
              <p>{productDetail?.description}</p>

              <div className="row mt-4">
                {productDetail?.category.includes('Pizza') ? (
                  <>
                    <div className="col-md-6">
                      <div className="form-group d-flex">
                        <div className="select-wrap">
                          <div className="icon">
                            <span
                              className="ion-ios-arrow-down"
                              style={{ color: '#fff' }}
                            ></span>
                          </div>

                          <select
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
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}

                <div className="w-100"></div>
                {/* <div className="input-group col-md-6 d-flex mb-3">
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
                </div> */}
              </div>
              <div style={{ color: '#fff' }}>
                <a
                  onClick={addToCartHandler}
                  className="btn btn-primary py-3 px-5"
                >
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

export async function getStaticPaths() {
  const slugs = await client.fetch(
    `*[_type == "foodProduct" && defined(slug.current)][].slug.current`
  );
  const categories = await client.fetch(`*[_type == "foodCategory"]{title}`);

  return {
    paths: categories
      .map(({ title: name }) =>
        slugs.map((slug) => ({ params: { category: name, slug: slug } }))
      )
      .flat(),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const pizzaPriceList = await client.fetch(
    `*[_type == "pizzaPriceList"]{_id, size, price}`
  );

  const productDetail = await client.fetch(
    `*[_type == "foodProduct" && slug.current == $slug][0]{_id,title,price, description, mainImage, "category":category[] -> title}`,
    { slug }
  );

  return {
    props: {
      productDetail,
      pizzaPriceList,
    },
  };
}
