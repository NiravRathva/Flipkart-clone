import mobile from "../Images/mobiles.webp";
import grocery from "../Images/grocery.webp";
import fashion from "../Images/fashion.webp";
import electonic from "../Images/electronic.webp";
import furniture from "../Images/home & furniture.png";
import appliance from "../Images/appliance.webp";
import travel from "../Images/travel.webp";
import beauty from "../Images/beaty.webp";
import twoWheeler from "../Images/two wheelers.webp";
import useWindowResize from "../Util/showIcon";
const Header = () => {
  const showIconOnly = useWindowResize();
  return (
    <div className="bg-gray-200">
      <ul className="flex justify-around">
        <li className="lg:mx-2">
          <figure className="text-center">
            <img
              src={grocery}
              alt=""
              className="w-16 sm:w-20 md:w-16 lg:w-32"
            />
            <figcaption className="text-sm sm:text-base md:text-lg lg:text-xl">
              {!showIconOnly && "Grocery"}
            </figcaption>
          </figure>
        </li>
        <li className="lg:mx-2">
          <figure className="text-center">
            <img src={mobile} alt="" className="w-16 sm:w-20 md:w-16 lg:w-32" />
            <figcaption className="text-sm sm:text-base md:text-lg lg:text-xl">
               {!showIconOnly && "Mobile"}
            </figcaption>
          </figure>
        </li>
        <li className="lg:mx-2">
          <figure className="text-center">
            <img
              src={fashion}
              alt=""
              className="w-16 sm:w-20 md:w-16 lg:w-32"
            />
            <figcaption className="text-sm sm:text-base md:text-lg lg:text-xl">
              {!showIconOnly && "Fashion"}
            </figcaption>
          </figure>
        </li>
        <li className="lg:mx-2">
          <figure className="text-center">
            <img
              src={electonic}
              alt=""
              className="w-16 sm:w-20 md:w-16 lg:w-32"
            />
            <figcaption className="text-sm sm:text-base md:text-lg lg:text-xl">
              {!showIconOnly && "Electrinic"}
            </figcaption>
          </figure>
        </li>
        <li className="lg:mx-2">
          <figure className="text-center">
            <img
              src={furniture}
              alt=""
              className="w-16 sm:w-20 md:w-16 lg:w-32"
            />
            <figcaption className="text-sm sm:text-base md:text-lg lg:text-xl">
              {!showIconOnly && " Home & furniture "}
            </figcaption>
          </figure>
        </li>
        <li className="lg:mx-2">
          <figure className="text-center">
            <img
              src={appliance}
              alt=""
              className="w-16 sm:w-20 md:w-16 lg:w-32"
            />
            <figcaption className="text-sm sm:text-base md:text-lg lg:text-xl">
              {!showIconOnly && "Appliances"}
            </figcaption>
          </figure>
        </li>
        <li className="lg:mx-2">
          <figure className="text-center">
            <img src={travel} alt="" className="w-16 sm:w-20 md:w-16 lg:w-32" />
            <figcaption className="text-sm sm:text-base md:text-lg lg:text-xl">
              {!showIconOnly && "Travel"}
            </figcaption>
          </figure>
        </li>
        <li className="lg:mx-2">
          <figure className="text-center">
            <img src={beauty} alt="" className="w-16 sm:w-20 md:w-16 lg:w-32" />
            <figcaption className="text-sm sm:text-base md:text-lg lg:text-xl">
              {!showIconOnly && "Beauty, toys & more"}
            </figcaption>
          </figure>
        </li>
        <li className="lg:mx-2">
          <figure className="text-center">
            <img
              src={twoWheeler}
              alt=""
              className="w-16 sm:w-20 md:w-16 lg:w-32"
            />
            <figcaption className="text-sm sm:text-base md:text-lg lg:text-xl">
              {!showIconOnly && " Two wheelers "}
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  );
};

export default Header;
