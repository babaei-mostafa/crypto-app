import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="rounded-div flex justify-between items-center h-20 font-bold">
      <Link to="/">
        <h1 className="text-2xl">Cryptobase</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      {/* <div className="hidden md:block">
        <Link to="/signin" className="p-4 hover:text-accent">
          Sign In
        </Link>
        <Link
          to="signup"
          className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
        >
          Sign Up
        </Link>
      </div> */}
      {/* Menu Icons */}
      <div
        className="block md:hidden cursor-pointer z-10"
        onClick={() => setNav((prev) => !prev)}
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 flex flex-col w-full h-[90%] justify-between items-center bg-primary ease-in duration-300 z-10"
            : "md:hidden fixed left-[-100%] top-20 flex flex-col w-full h-[90%] justify-between items-center bg-primary ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b py-6">
            <Link to="">Account</Link>
          </li>
          <li className="py-6">
            <ThemeToggle />
          </li>
        </ul>
        {/* <div className="flex flex-col w-full p-4">
          <Link to="/signin">
            <button className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
              Sign Up
            </button>
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
