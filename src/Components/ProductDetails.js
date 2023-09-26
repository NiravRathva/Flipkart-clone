import React from "react";

const ProductDetails = () => {
  return (
    <div className="w-4/5 bg-white mx-2 flex">
      {/*product image */}
      <div className="w-1/5">
        <img
          src="https://images.unsplash.com/photo-1585792180666-f7347c490ee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className=""
        />
      </div>

      <div className="w-4/5 flex">
        {/* product detils */}
        <div className="w-3/5 ">
          <div>
            <h4>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </h4>
            <p>
              <span>4.7</span> 1001 ratings & 500 reviews{" "}
            </p>
          </div>
          <div>
            <p>Operating System : android</p>
            <p> Full hd 1920* 1080 Pixels</p>
            <p> one year warranty on product</p>
          </div>
        </div>
        {/* product price and offers */}
        <div className="w-2/5">
          <h5>20999</h5>
          <p>free delivery </p>
          <p>save extra with combo offers</p>
          <p>save 1500 on exchange offer</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
