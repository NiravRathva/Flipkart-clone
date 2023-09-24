import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className=" flex mx-auto  lg:w-7/12 md:9/12 justify-center items-center my-8 h-[80vh]">
      <div className="w-2/6 bg-blue-600 h-5/6 hidden md:block">
        <div className="p-4 md:p-8">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Login</h1>
          <p className="text-gray-400 text-md md:text-lg lg:text-xl font-bold mb-4">Get access to your Orders, Wishlist and Recommandations</p>
        </div>
      </div>
      {/* login form  */}
      <div className="w-4/6 bg-white h-5/6 p-3 ">
        <div className="p-4 md:p-8 lg:p-8">
          <form action="">
            <input
              className="w-full px-4 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"
              type="text"
              placeholder="Enter your email"
            />

            <p className="text-sm text-gray-600">
              By continuing, you agree to our{" "}
              <span className="text-blue-500">Terms of Use</span> and{" "}
              <span className="text-blue-500">Privacy Policy</span>
            </p>

            <button
              className="w-full bg-orange-600 text-white py-2 px-4 my-4 rounded-md focus:outline-none "
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
        <Link to="/signup">
          <div className="text-center mt-4 ">
            <h4 className="text-gray-600">
              New to flipkart?
              <span className="text-blue-500">Create an account</span>
            </h4>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Layout(Login);
