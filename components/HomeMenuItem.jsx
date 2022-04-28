import Link from 'next/link';
import { urlForThumbnail } from '../utils/image';

const HomeMenuItem = ({ item, col = 'col-md-4' }) => {
  const formatHref = (item) => {
    const { category, slug } = item;
    return `/${category}/${slug.current}`;
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
              <Link href="/">
                <a className="btn btn-primary btn-outline-primary">
                  Add to Cart
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMenuItem;
