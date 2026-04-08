import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Context/ProductProvider";
import { useCart } from "../../Context/CartProvider";

const ProductDetails = () => {

  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="text-center mt-40 text-xl">
        Product not found
      </div>
    );
  }

  return (
    <section className="max-w-325 mx-auto px-5 md:px-12 my-30">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}

        <div className="bg-zinc-100 p-10 rounded-xl">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[400px] object-contain"
          />
        </div>

        {/* Details */}

        <div>

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {product.title}
          </h2>

          <p className="text-zinc-600 mb-5">
            {product.description}
          </p>

          <div className="text-xl font-semibold text-red-600 mb-4">
            ${product.price}
          </div>

          <div className="mb-3">
            Rating: {product.rating}
          </div>

          <div className="mb-5">
            Stock: {product.stock}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-800"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </section>
  );
};

export default ProductDetails;