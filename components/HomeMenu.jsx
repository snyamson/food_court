import dynamic from 'next/dynamic';
import { useState } from 'react';
import { AppStore } from '../utils/store';
import HomeMenuItem from './HomeMenuItem';
const MenuHead = dynamic(() => import('../containers/MenuHead'));

const HomeMenu = () => {
  const { foodCategory, foodProduct } = AppStore.useState((s) => s);
  const [selected, setSelected] = useState('Pizza');

  const filteredProducts = foodProduct.filter((item) =>
    item.category.includes(selected)
  );

  const handleCategorySelect = (category) => {
    setSelected(category);
  };

  const CategoryItem = ({ category, onClick }) => {
    const { title } = category;
    return (
      <a
        className={`nav-link ${selected === title ? 'active' : null}`}
        role="tab"
        onClick={onClick}
      >
        {title}
      </a>
    );
  };

  return (
    <>
      <section className="ftco-menu">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <MenuHead menuTitle="Special Menu" subTitle="Priscy" />
          </div>
          <div className="row d-md-flex">
            <div className="col-lg-12  p-md-5">
              <div className="row">
                <div className="col-md-12 nav-link-wrap mb-5">
                  <div className="nav  nav-pills justify-content-center">
                    {foodCategory.map((category) => (
                      <CategoryItem
                        key={category._id}
                        category={category}
                        onClick={() => handleCategorySelect(category.title)}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-md-12 align-items-center">
                  <div className="row">
                    {foodProduct?.length > 0 && filteredProducts?.length > 0 ? (
                      filteredProducts.map((item) => (
                        <HomeMenuItem key={item._id} item={item} />
                      ))
                    ) : (
                      <div>
                        <h1>No Products Yet</h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMenu;
