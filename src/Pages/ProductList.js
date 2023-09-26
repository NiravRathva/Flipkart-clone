import Filters from "../Components/Filters";
import Layout from "../Components/Layout";
import ProductDetails from "../Components/ProductDetails";

const ProductList = () => {
  return (
    <div className="flex bg-gray-200 p-3">
      {/* Filter section */}
      <Filters />
      {/* Product list section */}
      <ProductDetails />
    </div>
  );
};

export default Layout(ProductList);
