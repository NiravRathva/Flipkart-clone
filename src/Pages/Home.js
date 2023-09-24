import React from "react";
/* eslint-disable no-unused-vars */
import Layout from "../Components/Layout";
import ProductSlider from "../Components/ProductSlider";
import { data1, data2, data3 } from "../SliderData";
import Header from "../Components/Header";
const Home = () => {
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    speed: 500,
  };
  const title = ["Best Of Electronic", "Home decor and Furnishing"];
  return (
    <div>
        <Header />
      <div className="grid grid-cols-1 gap-4 my-4">
        <ProductSlider data={data1} settings={settings1} />
        <ProductSlider data={data2} settings={settings2} Title={title[0]} />
        <ProductSlider data={data3} settings={settings2} Title={title[1]} />
      </div>
    </div>
  );
};

export default Layout(Home);
