import React, { useState } from "react";
import Logo from "../../assets/public/logo.png";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartProvider";

const Navbar = ({ handleScroll }) => {

  const { cartCount } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white fixed top-0 left-0 right-0 shadow z-50">

      <nav className="max-w-325 px-5 md:px-12 mx-auto h-[14vh] flex items-center justify-between">

        {/* Logo */}

        <Link to="/" className="flex w-15 h-15 bg-zinc-100 rounded-full p-2">
          <img
            src={Logo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-x-15">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/allproducts">Products</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

        </ul>

        {/* Actions */}

        <div className="flex items-center gap-x-5">

          {/* <button className="text-[1.7rem] text-zinc-800 relative">
            <GoHeartFill />
            <span className="flex absolute top-4 right-3 justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] border-2 border-white">
              1
            </span>
          </button> */}

          <Link to="/cart" className="relative">

            <HiShoppingBag className="text-2xl text-zinc-800" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}

          </Link>

          {/* Hamburger Button */}

          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-zinc-800"
          >
            {menuOpen ? <TbMenu3 /> : <TbMenu2 />}
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-white shadow-lg">

          <ul className="flex flex-col items-center gap-6 py-6 text-lg">

            <li onClick={() => setMenuOpen(false)}>
              <Link to="/">Home</Link>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <Link to="/allproducts">Products</Link>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <Link to="/about">About</Link>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <Link to="/cart">Cart</Link>
            </li>

          </ul>

        </div>

      )}

    </header>
  );
};

export default Navbar;