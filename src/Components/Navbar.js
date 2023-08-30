import SearchIcon from "@mui/icons-material/Search";
import Logo from "../Images/flipkart-plus_8d85f4.png";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person2Icon from '@mui/icons-material/Person2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DownloadIcon from '@mui/icons-material/Download';
const Navbar = () => {
  return (
    <div className="bg-blue-600 py-2 px-4 flex items-center justify-between">
      {/* Logo */}
      <img src={Logo} alt="Flipkart Logo" className="h-10" />

      {/* Search */}
      <div className="flex items-center bg-white rounded-lg px-2">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="py-1 px-2 border-none outline-none rounded-l-lg"
        />
        <button className="bg-blue-500 text-white px-3 rounded-r-lg">
          <SearchIcon />
        </button>
      </div>

      {/* Navigation */}
      <div className="space-x-4 flex items-center">
        <div className="relative group">
          <button className="text-blue-600 bg-white  px-2 py-1 font-semibold group-hover:text-blue-300">
            Login
          </button>
          <div className="hidden group-hover:block absolute mt-2 bg-white border border-gray-300 rounded-lg py-2 px-4">
            <div className="mb-3">
              <h6 className="text-sm font-semibold">New customer</h6>
              <button className="text-blue-500 text-sm">Sign up</button>
            </div>
            <div>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="">My profile</a>
                </li>
                <li>
                  <a href="">Flipkart Plus Zone</a>
                </li>
                <li>
                  <a href="">Orders</a>
                </li>
                <li>
                  <a href="">Wishlist</a>
                </li>
                <li>
                  <a href="">Rewards</a>
                </li>
                <li>
                  <a href="">Gift Cards</a>
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
          <div className="hidden group-hover:block absolute mt-2 bg-white border border-gray-300 rounded-lg py-2 px-4">
            <a href="" className="text-sm">Notification Preference</a>
            <a href="" className="text-sm">
              24 <span>&times;</span> 7 Customer care
            </a>
            <a href="" className="text-sm">Advertise</a>
            <a href="" className="text-sm">Download app</a>
          </div>
        </a>
        <a href="#" className="text-white">
          Cart
        </a>
      </div>
    </div>
  );
};

export default Navbar;
