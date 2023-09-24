import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="mx-auto w-11/12">
      <Slider {...settings}>
        <div className="p-2">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4529fd434a85c683.jpg?q=20"
            alt=""
          />
        </div>
        <div className="p-2">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7961400ee1bd2961.jpg?q=20"
            alt=""
          />
        </div>
        <div className="p-2">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/89c26b04d640c7a9.jpg?q=20"
            alt=""
          />
        </div>
        <div className="p-2">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0819129bd1a3c342.jpg?q=20"
            alt=""
          />
        </div>
        <div className="p-2">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a89ee09acc1a9e5.jpg?q=20"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default ProductSlider;
