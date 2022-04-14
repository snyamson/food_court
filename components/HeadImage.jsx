import Link from "next/link";
import styles from "../styles/headImage.module.css";

const HeadImage = ({ title, currentPath }) => {
  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundImage: 'url("/assets/images/bg_3.jpg")',
        }}
      >
        <div className={styles.overlay} />
        <div className={`container ${styles.content}`}>
          <div className="row slider-text justify-content-center align-items-center">
            <div className="col-md-7 col-sm-12 text-center ">
              <h1 className="mb-3 mt-5 bread">{title}</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </span>
                <span>{currentPath}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadImage;
