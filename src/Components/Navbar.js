/* eslint-disable jsx-a11y/anchor-is-valid */
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../Images/flipkart-plus_8d85f4.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Person2Icon from "@mui/icons-material/Person2";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DownloadIcon from "@mui/icons-material/Download";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ReorderIcon from "@mui/icons-material/Reorder";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { blue } from "@mui/material/colors";
const Navbar = () => {
  return (
    <div className="bg-blue-600 py-2  px-4 flex items-center justify-center">
      {/* Logo */}
      <img src={Logo} alt="Flipkart Logo" className="h-10 mx-4 " />

      {/* Search */}
      <div className="flex items-center w-1/3 bg-white  px-2 mx-4 relative">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="py-1 px-2  border-none outline-none w-full"
        />
        <button className=" px-3  absolute right-0">
          <SearchIcon />
        </button>
      </div>

      {/* Navigation */}
      <div className="space-x-4 flex   mx-4">
        <div className="relative group flex-around">
          <button className="text-blue-600 bg-white  px-2 py-1 font-semibold group-hover:text-blue-300">
            Login
          </button>
          <div className="hidden group-hover:block absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg py-2 px-4">
            <div className="mb-3 flex">
              <h6 className="text-sm font-semibold mr-2">New customer? </h6>
              <button className="text-blue-500 text-sm hover:underline">
                {" "}
                Sign up
              </button>
            </div>
            <div>
              <ul className="space-y-1 text-sm flex flex-col w-36">
                <li>
                  <a href="#">
                    <Person2Icon sx={{ color: blue[500] }} className="mr-1" />
                    My profile
                  </a>
                </li>
                <li>
                  <a href="">
                    <Person2Icon sx={{ color: blue[500] }} className="mr-1" />
                    Flipkart Plus Zone
                  </a>
                </li>
                <li>
                  <a href="">
                    <ReorderIcon sx={{ color: blue[500] }} className="mr-1" />
                    Orders
                  </a>
                </li>
                <li>
                  <a href="">
                    <FavoriteIcon sx={{ color: blue[500] }} className="mr-1" />
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="">
                    <EmojiEventsIcon
                      sx={{ color: blue[500] }}
                      className="mr-1"
                    />
                    Rewards
                  </a>
                </li>
                <li>
                  <a href="">
                    <CardGiftcardIcon
                      sx={{ color: blue[500] }}
                      className="mr-1"
                    />
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a href="#" className="text-white group relative">
          Become a Seller
        </a>
        <a href="#" className="text-white group relative">
          More
          <div className="hidden group-hover:block absolute mt-2 w-52 flex flex-col bg-white border border-gray-300 rounded-lg py-2 px-4 text-black">
            <ul>
              <li className="my-2">
                <a href="" className="text-sm ">
                  <NotificationsIcon
                    sx={{ color: blue[500] }}
                    className="mr-1"
                  />
                  Notification Preference
                </a>
              </li>
              <li className="my-2">
                <a href="" className="text-sm ">
                  <SupportAgentIcon
                    sx={{ color: blue[500] }}
                    className="mr-1"
                  />
                  24 <span>&times;</span> 7 Customer care
                </a>
              </li>
              <li className="my-2">
                <a href="" className="text-sm ">
                  <ShowChartIcon sx={{ color: blue[500] }} className="mr-1" />
                  Advertise
                </a>
              </li>
              <li className="my-2">
                <a href="" className="text-sm ">
                  <DownloadIcon sx={{ color: blue[500] }} className="mr-1" />{" "}
                  Download app
                </a>
              </li>
            </ul>
          </div>
        </a>
        <a href="#" className="text-white">
          <ShoppingCartIcon /> Cart
        </a>
      </div>
    </div>
  );
};

export default Navbar;
