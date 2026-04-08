import React from "react";
import { useCart } from "../../Context/CartProvider";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({ setOrderSummary }) => {

  const { cart, totalPrice } = useCart();
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 z-50 flex">

      {/* Overlay */}

      <div
        className="flex-1 bg-black/40"
        onClick={() => setOrderSummary(false)}
      />

      {/* Drawer */}

      <div className="w-[400px] h-full bg-white shadow-xl p-6 transform transition-transform duration-300">

        <h2 className="text-2xl font-bold mb-6">
          Order Summary
        </h2>

        {/* Items */}

        <div className="space-y-3 max-h-[60vh] overflow-y-auto">

          {cart.map((item) => (

            <div
              key={item.id}
              className="flex justify-between pb-2"
            >
              <span>
                {item.title.split(" ").slice(0,2).join(" ")} (x{item.quantity})
              </span>

              <span>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>

          ))}

        </div>

        {/* Total */}

        <div className="mt-6 border-t pt-4 flex justify-between font-bold text-lg">

          <span>Total</span>

          <span>${totalPrice.toFixed(2)}</span>

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <button
            onClick={() => setOrderSummary(false)}
            className="flex-1 bg-gray-500 text-white py-3 rounded-lg"
          >
            Close
          </button>

          <button
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg" onClick={()=>{
 navigate("/order-success")
}}


          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
};

export default OrderSummary;