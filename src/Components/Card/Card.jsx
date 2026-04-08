import React from "react";
import { GoHeartFill } from "react-icons/go";
import { useCart } from "../../Context/CartProvider";
import { Link } from "react-router-dom";


const Card = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-zinc-100 p-5 border border-zinc-300 rounded-xl">
      {/* Product Tags */}
      <div className="flex justify-between items-center">
        <button className="text-3xl text-zinc-300">
          <GoHeartFill />
        </button>
      </div>

      {/* Product Image */}
      <div className="p-5 w-full h-[30vh] my-5">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-[1.4rem] font-semibold">
          {product.title.split(" ").slice(0, 2).join(" ")}
        </h3>
        <div className="mt-1 mb-7">
          <span className="text-red-600 font-semibold text-lg">
            ${product.price}
          </span>
        </div>
        <button
          className="cursor-pointer bg-blue-600 text-white text-lg py-3 w-full rounded-lg active:bg-blue-800"
          onClick={() => {
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
