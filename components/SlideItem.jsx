import styles from "../styles/banner.module.css";

const SlideItem = ({ image }) => {
  return (
    <>
      <div className={styles.slide_item}>
        <div className={styles.overlay} />
        <img
          className={styles.slide_image}
          src={`/assets/images/priscy-${image}.jpg`}
          alt=""
        />
        <div className={styles.slide_content}>
          <div
            className={`col-md-8 col-sm-12 text-center ${styles.slide_content_inner}`}
          >
            <span className={styles.heading}>Welcome</span>
            <h1 className={`mb-4 ${styles.sub_heading}`}>
              The Best Quality Served Always
            </h1>
            <p className={`mb-4 mb-md-5 ${styles.text}`}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <div className={styles.buttons}>
              <a
                href="#"
                className={`btn btn-primary p-3 px-xl-4 py-xl-3 ${styles.btn}`}
              >
                Order Now
              </a>
              <a
                href="#"
                className={`btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3 ${styles.btn}`}
              >
                View Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideItem;
