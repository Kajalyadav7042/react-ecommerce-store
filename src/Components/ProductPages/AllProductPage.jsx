import React, { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductProvider";
import Card from "../Card/Card";

const ProductPage = () => {

  const { products, loading, error } = useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 10;

  // pagination calculation
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  // loading state
  if (loading) {
    return (
      <h2 className="text-center text-2xl mt-20">
        Loading products...
      </h2>
    );
  }

  // error state
  if (error) {
    return (
      <h2 className="text-center text-2xl mt-20">
        {error}
      </h2>
    );
  }

  return (
    <section className="max-w-325 px-5 md:px-12 mx-auto my-12 mt-35">

      <h2 className="text-3xl font-bold mb-10">
        All Products
      </h2>

      {/* Products Grid */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {currentProducts.map((product) => (
          <Card
            key={product.id}
            product={product}
          />
        ))}

      </div>

      {/* Pagination */}

      <div className="flex justify-center gap-3 mt-12">

        {Array.from({ length: totalPages }, (_, i) => {

          const page = i + 1;

          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-200 text-black"
              }`}
            >
              {page}
            </button>
          );
        })}

      </div>

    </section>
  );
};

export default ProductPage;