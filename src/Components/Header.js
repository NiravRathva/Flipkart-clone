import mobile from "../Images/mobiles.webp";
import grocery from "../Images/grocery.webp";
import fashion from "../Images/fashion.webp";
import electonic from "../Images/electronic.webp";
import furniture from "../Images/home & furniture.webp";
import appliance from "../Images/appliance.webp";
import travel from "../Images/travel.webp";
import beauty from "../Images/beaty.webp";
import twoWheeler from "../Images/two wheelers.webp";
const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <figure>
            <img src={grocery} alt="" />
            <figcaption>Grocery </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={mobile} alt="" />
            <figcaption>Mobile</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={fashion} alt="" />
            <figcaption>Fashion</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={electonic} alt="" />
            <figcaption>Electrinic</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={furniture} alt="" />
            <figcaption>Home & furniture</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={appliance} alt="" />
            <figcaption>Appliances</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={travel} alt="" />
            <figcaption>Travel</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={beauty} alt="" />
            <figcaption>Beauty, toys & more </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={twoWheeler} alt="" />
            <figcaption>Two wheelers</figcaption>
          </figure>
        </li>
      </ul>
    </div>
  );
};

export default Header;
