import Filters from "../Components/Filters";
import Layout from "../Components/Layout";
import ProductDetails from "../Components/ProductDetails";

const ProductList = () => {
  return (
    <div className="flex bg-gray-200 p-3">
      {/* Filter section */}
      <div className="w-1/5 bg-gray-600 p-4 bg-white">
        <Filters />
      </div>
      {/* Product list section */}
      <div className="w-4/5 bg-white mx-2 flex flex-col p-2">

        <ProductDetails />
        <hr />
        <ProductDetails />
        <hr />
        <ProductDetails />
        <hr />

      </div>
    </div>
  );
};

export default Layout(ProductList);
