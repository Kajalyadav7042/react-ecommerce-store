import React from "react";
import { FaShoppingCart, FaTruck, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="max-w-325 mx-auto px-5 md:px-12 my-30">

      {/* Hero Section */}

      <div className="text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
          About Our Store
        </h1>

        <p className="text-zinc-600 max-w-2xl mx-auto">
          Welcome to our online store. We provide high quality products with
          the best shopping experience. Our mission is to make online shopping
          easy, fast, and reliable for everyone.
        </p>

      </div>

      {/* Features */}

      <div className="grid md:grid-cols-4 gap-8 mb-20">

        <div className="bg-zinc-100 p-6 rounded-xl text-center">
          <FaShoppingCart className="text-blue-600 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">
            Easy Shopping
          </h3>
          <p className="text-zinc-600 text-sm">
            Browse and purchase products easily with a smooth user experience.
          </p>
        </div>

        <div className="bg-zinc-100 p-6 rounded-xl text-center">
          <FaTruck className="text-blue-600 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">
            Fast Delivery
          </h3>
          <p className="text-zinc-600 text-sm">
            Quick and reliable delivery to your doorstep.
          </p>
        </div>

        <div className="bg-zinc-100 p-6 rounded-xl text-center">
          <FaShieldAlt className="text-blue-600 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">
            Secure Payment
          </h3>
          <p className="text-zinc-600 text-sm">
            Your payments are protected with secure checkout systems.
          </p>
        </div>

        <div className="bg-zinc-100 p-6 rounded-xl text-center">
          <FaHeadset className="text-blue-600 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">
            24/7 Support
          </h3>
          <p className="text-zinc-600 text-sm">
            Our support team is always ready to help you.
          </p>
        </div>

      </div>

      {/* About Content */}

      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Our Mission
          </h2>

          <p className="text-zinc-600 mb-4">
            Our goal is to build a modern shopping platform that provides
            convenience and quality products to customers. We focus on
            user-friendly design, secure transactions, and reliable service.
          </p>

          <p className="text-zinc-600">
            We continuously improve our platform to deliver a better shopping
            experience.
          </p>
        </div>

        <div className="bg-zinc-100 h-80 rounded-xl flex items-center justify-center text-zinc-500">
          Image / Illustration
        </div>

      </div>

      {/* CTA */}

      <div className="text-center">

        <h2 className="text-3xl font-bold mb-4">
          Start Shopping Today
        </h2>

        <p className="text-zinc-600 mb-6">
          Discover amazing products and enjoy a smooth shopping experience.
        </p>

        <Link to="/allproducts">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800">
            Explore Products
          </button>
        </Link>

      </div>

    </section>
  );
};

export default About;