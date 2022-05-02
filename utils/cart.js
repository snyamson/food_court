import axios from 'axios';
import { useCart } from 'react-use-cart';

const useAddToCartHandler = async ({ id, price, selectedSize }) => {
  const { addItem } = useCart();
  const { data } = await axios.get(`/api/product/${id}`);

  const newItem = {
    id: data._id,
    name: data.title,
    slug: data.slug.current,
    price: price ? price : data.price,
    size: selectedSize ? selectedSize : null,
    image: urlForThumbnail(data.mainImage),
  };

  addItem(newItem);
};

export { useAddToCartHandler };
