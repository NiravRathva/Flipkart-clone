import React from "react";

const Filters = () => {
  return (
    <div className="w-1/5 bg-gray-600 p-4 bg-white">
      <div>
        <h4 className="text-black font-bold text-lg">Filters</h4>
      </div>
      <hr className="my-4" />
      <div className="mt-4">
        <h4 className="text-black text-lg">Categories</h4>
        {/* Category filters */}
      </div>{" "}
      <hr className="my-4" />
      <div className="mt-4">
        <h4 className="text-black text-lg">Price</h4>
        <label htmlFor="price-range" className="text-black">
          Price Range: <span id="price-value">1</span> - <span>1000</span>
        </label>
        <input
          type="range"
          id="price-range"
          name="price-range"
          min="1"
          max="1000"
          step="10"
          className="w-full"
          onChange={(e) => {
            document.getElementById("price-value").textContent = e.target.value;
          }}
        />
      </div>{" "}
      <hr className="my-4" />
      <div className="mt-4">
        <h4 className="text-black text-lg">Brand</h4>

        <div>
          <label className="text-black text-sm">
            <input type="checkbox" value="Brand 1" name="brand-filter" className="mx-2"/>
            Brand 1
          </label>
        </div>
        <div>
          <label className="text-black text-sm">
            <input type="checkbox" value="Brand 2" name="brand-filter" className="mx-2"/>
            Brand 2
          </label>
        </div>
        <div>
          <label className="text-black text-sm">
            <input type="checkbox" value="Brand 3" name="brand-filter" className="mx-2"/>
            Brand 3
          </label>
        </div>
        <div>
          <label className="text-black text-sm">
            <input type="checkbox" value="Brand 4" name="brand-filter" className="mx-2"/>
            Brand 4
          </label>
        </div>
      </div>{" "}
      <hr className="my-4" />
    </div>
  );
};

export default Filters;
