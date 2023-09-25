import Filters from "../Components/Filters";
import Layout from "../Components/Layout";

const ProductList = () => {
  return (
    <div className="flex bg-gray-200 p-3">
      {/* Filter section */}
      <Filters/>
      {/* Product list section */}
      <div className="w-4/5 bg-white mx-2"></div>
      {/* Adjusted the width to 8/12 */}
    </div>
  );
};

export default Layout(ProductList);
