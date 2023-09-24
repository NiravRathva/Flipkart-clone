import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"
const ProductSlider = ({ data, settings, Title }) => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  // };
  return (
    <div className="mx-auto w-11/12 shadow-md p-4 rounded-lg bg-gray-200">
      <h3 className="text-2xl font-bold mb-4">{Title}</h3>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="p-2" key={index}>
            <img src={item.Image} alt="" />
            <h4 className="text-lg font-semibold">{item.name}</h4>
            <h6 className="text-sm mt-2">{item.offer}</h6>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
