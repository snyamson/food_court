import dynamic from 'next/dynamic';
const MenuHead = dynamic(() => import('../containers/MenuHead'));
import HomeMenuItem from './HomeMenuItem';

const HomeSpecial = ({ foodProduct }) => {
  const Staters = foodProduct.filter((item) =>
    item.category.includes('Starters')
  );

  return (
    <>
      <section className="ftco-section">
        <div className="container ">
          <div className="row justify-content-center mb-5 pb-3">
            <MenuHead menuTitle="Delicious Starters" subTitle="Priscy" />
          </div>
          <div className="row">
            {foodProduct?.length > 0 && Staters?.length > 0 ? (
              Staters.map((item) => (
                <HomeMenuItem key={item._id} item={item} col="col-md-3" />
              ))
            ) : (
              <>Product Not Available</>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSpecial;
