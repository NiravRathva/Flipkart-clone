import React from 'react'

const Product = () => {
    return (
        <div className='flex'>
            {/* product Image          */}
            <div className='w-2/5 p-2 flex flex-col '>
                <div><img src="https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHR2fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" /></div>
                <div>
                    <button >Add To Cart</button>
                    <button > Buy Now </button>
                </div>
            </div>
            {/* product details  */}
            <div className='w-3/5'>
                <div>
                    <h4 className="text-lg font-bold text-blue-600">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </h4>
                    <p className="text-gray-500">
                        <span className="font-semibold text-white bg-green-600 px-2">4.7</span>12,100 ratings & 5,000 reviews
                    </p>
                    <p>This text is <del>strikethrough</del> using &lt;del&gt;.</p>

                </div>
                <div className='flex'>
                    <h3>&#8377;31,990 </h3><span className=''><del>&#8377;49,990</del></span> <span className=''> 36% off</span>
                </div>
                <div>
                    <ul>
                        <li className=""><span>Bank offer</span> 5% cashback on Flipkart Axis bank credit card</li>
                        <li className=""><span>Partner offer</span>Purchase now and get one surprise coupon in future</li>
                        <li className=""><span>No COST EMI</span>standard EMI available </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Product