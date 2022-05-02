import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCart } from 'react-use-cart';
import { urlForThumbnail } from '../utils/image';

const HomeMenuItem = ({ item, col = 'col-md-4' }) => {
  const { addItem } = useCart();
  const [addToCart, setAddToCart] = useState(false);

  const addToCartHandler = async () => {
    setAddToCart(true);
    const { data } = await axios.get(`/api/product/${item._id}`);

    const newItem = {
      id: data._id,
      name: data.title,
      slug: data.slug.current,
      price: data.price,
      size: data.category.includes('Pizza') ? 'Large' : null,
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
      <div className={col}>
        <div className="menu-entry">
          <Link href={`/${item?.category}/${item?.slug.current}`}>
            <a
              className="img"
              style={{
                backgroundImage: `url(${urlForThumbnail(item?.mainImage)})`,
                backgroundPosition: 'center',
              }}
            ></a>
          </Link>
          <div className="text text-center pt-4">
            <h3>
              <Link href={`/${item?.category}/${item?.slug.current}`}>
                <a>{item?.title}</a>
              </Link>
            </h3>
            <p className="price">
              <span>&#8373;{item?.price}</span>
            </p>
            <p>
              <a
                onClick={addToCartHandler}
                className="btn btn-primary btn-outline-primary"
              >
                {addToCart ? 'Processing' : ' Add to Cart'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMenuItem;
