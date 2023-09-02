import Slider from "react-slick";

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2>Featured Products</h2>
      <Slider {...settings}>
        <div className="product-slide">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/50/50/image/9cc71e2f6e4f027b.jpg?q=50" alt="Product" />
          <h3>Laptop</h3>
          <p>Product Description</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-slide">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/50/50/image/84ae27f93c14a4e3.jpg?q=50" alt="Product" />
          <h3>Product Name</h3>
          <p>Product Description</p>
          <button>Add to Cart</button>
        </div>
      </Slider>
    </div>
  );
};

export default ProductSlider;
