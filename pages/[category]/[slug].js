import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';
import client from '../../utils/client';
import { urlForThumbnail, useImageProps } from '../../utils/image';

const Index = ({ productDetail, pizzaPriceList }) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(pizzaPriceList[0]?.size);
  const [price, setPrice] = useState(productDetail?.price);
  const [addToCart, setAddToCart] = useState(false);

  const handleSelectedSize = (e) => {
    setSelectedSize(e.target.value);
    const currentPizza = pizzaPriceList.filter(
      (item) => item.size === e.target.value
    );
    setPrice(currentPizza[0]?.price);
  };

  const addToCartHandler = async () => {
    setAddToCart(true);
    const { data } = await axios.get(`/api/product/${productDetail._id}`);

    const newItem = {
      id: data._id,
      name: data.title,
      slug: data.slug.current,
      price: price ? price : data.price,
      size: data.category.includes('Pizza') ? selectedSize : null,
      image: urlForThumbnail(data.mainImage),
    };

    addItem(newItem);
    toast.success(`${newItem.name} added to cart!`, {
      position: toast.POSITION.TOP_CENTER,
    });
    setAddToCart(false);
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
              </div>
              <div style={{ color: '#fff' }}>
                <a
                  onClick={addToCartHandler}
                  className="btn btn-primary py-3 px-5"
                >
                  {addToCart ? 'Processing' : ' Add to Cart'}
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
