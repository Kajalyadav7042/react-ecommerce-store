import React from "react";
import { FaMinus, FaTrash, FaPlus } from "react-icons/fa";
import { useCart } from "../../Context/CartProvider";
import { Link } from "react-router-dom";
import OrderSummary from "../OrderSummary/OrderSummary";


const Cart = ({setOrderSummary,orderSummary}) => {

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="max-w-325 mx-auto px-5 md:px-12 my-30 text-center">
        <h2 className="text-4xl font-bold mb-6">Your Cart</h2>
        <p className="text-lg text-zinc-600">
          Your cart is empty. Start adding some products.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-325 mx-auto px-5 md:px-12 my-30">

      <h2 className="text-3xl md:text-5xl font-bold mb-8">
        Your Cart
      </h2>

      {/* Cart Items */}

      <div className="space-y-5">

        {cart.map((item) => (

          <div
            key={item.id}
            className="bg-zinc-100 border border-zinc-300 p-5 rounded-xl flex flex-col md:flex-row items-center gap-5"
          >

            {/* Image */}

            <div className="w-24 h-24">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details */}

            <div className="flex-1 w-full">

              <div className="flex justify-between items-center">

                <h4 className="font-semibold text-lg">
                  {item.title}
                </h4>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="w-8 h-8 bg-red-600 rounded-full text-white flex justify-center items-center"
                >
                  <FaTrash />
                </button>

              </div>

              <div className="flex justify-between items-center mt-3">

                <span className="font-semibold text-red-600">
                  ${item.price} * {item.quantity} = ${(item.price*item.quantity).toFixed(0)}
                </span>

                <div className="flex items-center gap-3">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-7 h-7 bg-blue-600 rounded-full text-white flex justify-center items-center"
                  >
                    <FaMinus />
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-7 h-7 bg-blue-600 rounded-full text-white flex justify-center items-center"
                  >
                    <FaPlus />
                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Cart Total */}

      <div className="mt-10 border-y border-zinc-300 py-5 max-w-xl ml-auto">

        <div className="flex justify-between mb-2">
          <span className="font-semibold">SubTotal:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span className="font-semibold">Shipping:</span>
          <span>$0.00</span>
        </div>

        <div className="flex justify-between border-t border-zinc-300 pt-2">
          <span className="font-bold text-lg text-blue-600">
            Order Total
          </span>
          <span className="font-bold text-lg text-blue-600">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

      </div>

      {/* Checkout */}

      <div className="flex justify-end mt-6">
        
        <button className="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-800" onClick={()=>{
          setOrderSummary(true)
        }}>
          Checkout
        </button>
        
      </div>

{
  orderSummary && <OrderSummary setOrderSummary={setOrderSummary}></OrderSummary>
}

    </section>
  );
};

export default Cart;