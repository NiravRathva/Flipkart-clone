import React from 'react'

const Product = () => {
    return (
        <div className='flex bg-white'>
            {/* product Image          */}
            <div className='w-1/3 p-2 flex flex-col items-center justify-center '>
                <div className='border mb-2'>
                    <img className='p-4 ' src="https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHR2fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className='flex '>
                    <button className='px-4 py-2 bg-yellow-500 text-white font-bold  mx-1'>Add To Cart</button>
                    <button className='px-4 py-2 bg-orange-500 text-white font-bold  mx-1'> Buy Now </button>
                </div>
            </div>
            {/* product details  */}
            <div className='w-2/3 p-4'>
                <div>
                    <h4 className="text-lg font-bold text-blue-600">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </h4>
                    <p className="text-gray-500">
                        <span className="font-semibold text-white bg-green-600 px-2">4.7</span>12,100 ratings & 5,000 reviews
                    </p>

                </div>
                <div className='flex content-center my-1'>
                    <h1 className='text-2xl  '>&#8377;31,990 </h1><span className='text-gray-500 m-1'><del>&#8377;49,990</del></span> <span className='text-green-500 m-1'>  36% off</span>
                </div>
                <div>
                    <ul>
                        <li className=""><span className='font-bold mx-1'>Bank offer</span> 5% cashback on Flipkart Axis bank credit card</li>
                        <li className=""><span className='font-bold mx-1'>Partner offer</span>Purchase now and get one surprise coupon in future</li>
                        <li className=""><span className='font-bold mx-1'>No COST EMI</span>standard EMI available </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Product