import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap gap-y-12 max-w-350 mx-auto px-10">
        <div className="w-full md:w-[35%]">
          <a href="#" className="text-3xl font-bold ">
            Sh<span className="text-blue-500 ">op</span>sify
          </a>

          <p className="text-zinc-600 mt-6 max-w-87.5">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>

          <p className="text-zinc-800 mt-6">2025 &copy; all rights reserved</p>
        </div>

        <ul className="w-full md:w-[20%]">
            <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
            </li>
            <li className="mt-6">
                <Link to="/about" className="hover:text-blue-500 text-zinc-800">About</Link>
            </li>
             <li className="mt-6">
                <a href="" className="hover:text-blue-500 text-zinc-800">FAQ's</a>
            </li>
        </ul>


        <ul className="w-full md:w-[20%]">
            <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
            </li>
            <li className="mt-6">
                <a href="" className="hover:text-blue-500 text-zinc-800">Support Center</a>
            </li>
             <li className="mt-6">
                <a href="" className="hover:text-blue-500 text-zinc-800">Feedback</a>
            </li>
             <li className="mt-6">
                <a href="" className="hover:text-blue-500 text-zinc-800">Contact Us</a>
            </li>
        </ul>

        <div className="w-full md:w-[25%]">
             <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
             <p className="text-zinc-600 mt-6">Ouestions or Feedback? <br /> We'd to hear from you.</p>
             <div className="flex mt-6 p-1 rounded-lg bg-white">
                <input className="pl-4 h-[5vh] flex-1 focus:outline-none" type="email" name="email" placeholder="Email Address" autoComplete="off" />
                <button className="bg-gradient-to-b from-blue-400 to-blue-500 p-2 rounded-lg text-white text-2xl cursor-pointer hover:to-blue-600"><IoIosArrowForward/></button>
             </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
