import React from "react";

const ProductDetails = () => {
  return (
    <div className=" flex">
      {/* product image */}
      <div className="w-1/5 items-center p-2">
        <img
          src="https://images.unsplash.com/photo-1585792180666-f7347c490ee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-full"
        />
      </div>

      <div className="w-4/5 flex">
        {/* product details */}
        <div className="w-3/5 p-2">
          <div>
            <h4 className="text-lg font-bold text-blue-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </h4>
            <p className="text-gray-500">
              <span className="font-semibold text-white bg-green-600 px-2">4.7</span>12,100 ratings & 5,000 reviews
            </p>
          </div>
          <div>
            <ul className="px-4 my-1 list-disc">
              <li className="text-sm mb-1">Operating System : android</li>
              <li className="text-sm mb-1">Full hd 1920* 1080 Pixels</li>
              <li className="text-sm mb-1">One year warranty on product</li>
            </ul>

          </div>
        </div>
        {/* product price and offers */}
        <div className="w-2/5 p-4">
          <h5 className="text-2xl font-semibold mb-2">&#8377; 20,999</h5>
          <ul>

            <li className=" mb-2">Free Delivery</li>
            <li className=" text-green-600 bg-green-100  w-fit p-1 text-sm mb-2 ">Lowest price since Launch</li>
            <li className="text-sm">Save extra with combo offers</li>
            <li className="text-sm">Save <span className="font-bold">&#8377;1500</span> on exchange offer</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductDetails;
