/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import styles from "../styles/banner.module.css";
import SlideItem from "./SlideItem";

const Banner = () => {
  const settings = {
    dots: false,
    autoplay: true,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Slider {...settings}>
          <SlideItem image={2} />
          <SlideItem image={3} />
          <SlideItem image={1} />
        </Slider>
      </div>
    </>
  );
};

export default Banner;
