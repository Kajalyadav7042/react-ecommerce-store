import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const OrderPlaced = () => {

  return (

    <section className="max-w-325 mx-auto px-5 md:px-12 my-40 text-center">

      {/* Success Icon */}

      <div className="flex justify-center mb-6">
        <FaCheckCircle className="text-green-600 text-7xl" />
      </div>

      {/* Title */}

      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Order Placed Successfully
      </h1>

      {/* Message */}

      <p className="text-zinc-600 text-lg mb-8">
        Thank you for your purchase.  
        Your order has been placed successfully.
      </p>

      {/* Order Info */}

      <div className="bg-zinc-100 border border-zinc-300 rounded-xl p-6 max-w-xl mx-auto mb-10">

        <div className="flex justify-between mb-2">
          <span className="font-semibold">Order ID:</span>
          <span>#ORD{Math.floor(Math.random()*100000)}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span className="font-semibold">Payment Method:</span>
          <span>Cash on Delivery</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Estimated Delivery:</span>
          <span>3-5 Days</span>
        </div>

      </div>

      {/* Buttons */}

      <div className="flex justify-center gap-5 flex-wrap">

        <Link to="/allproducts">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800">
            Continue Shopping
          </button>
        </Link>

        <Link to="/">
          <button className="bg-zinc-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-zinc-900">
            Go to Home
          </button>
        </Link>

      </div>

    </section>

  );
};

export default OrderPlaced;