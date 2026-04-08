import React, { useContext, useState } from "react";
import Card from "../Card/Card";
import { ProductContext } from "../../Context/ProductProvider";
import { Link } from "react-router-dom";
const Products = () => {
  const categories = [
    "All",
    "Beauty",
    "Fragrances",
    "Furniture",
    "Groceries",
  ];

  const [activeTab, setActiveTab] = useState("All");

  const { products } = useContext(ProductContext);

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === activeTab.toLowerCase(),
        );

  const visibleProducts = filteredProducts.slice(0, 8);

  return (
    <section id="product-section" className="max-w-325 px-5 md:px-12 mx-auto my-10 mt-10">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 justify-center items-center mt-20 md:mt-10">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={`px-8 py-2 rounded-full text-lg cursor-pointer ${activeTab.toLowerCase() == category.toLowerCase() ? "bg-blue-600 text-white" : "text-zinc-800 bg-zinc-100"}`}
              onClick={() => {
                setActiveTab(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Product Listing */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-10">
        {visibleProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      {/* View All */}
     <div className='mt-15 mx-auto w-fit'>
                 <Link to='allproducts' className='bg-blue-600 hover:bg-blue-800 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 cursor-pointer'>
                 View All
                 </Link>
            </div>
    </section>
  );
};

export default Products;
