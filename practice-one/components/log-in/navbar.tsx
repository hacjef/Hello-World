"use client";
import React, { useState } from "react";
import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi"; // Import icons
import Link from "next/link";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="text-black font-extrabold"
                  style={{ fontSize: "40px" }}
                >
                  MC
                </Link>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
              <Link href="/" className="text-black hover:text-gray-700">
                Home
              </Link>
              <Link href="/" className="text-black hover:text-gray-700">
                Categories
              </Link>
              <Link href="/" className="text-black hover:text-gray-700">
                Product
              </Link>
              <Link href="/" className="text-black hover:text-gray-700">
                About
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <FiSearch className="absolute top-2 right-3 text-gray-500" />
              </div>
            </div>

            {/* Account & Cart Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/home/cart/" className="text-black hover:text-gray-700">
                <FiUser size={24} />
              </Link>
              <Link href="/" className="text-black hover:text-gray-700">
                <FiShoppingCart size={24} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                className="p-3 rounded-md text-black focus:outline-none"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6H16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isClick && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-2">
              <Link href="/" className="block text-black hover:text-gray-700">
                Home
              </Link>
              <Link href="/" className="block text-black hover:text-gray-700">
                Categories
              </Link>
              <Link href="/" className="block text-black hover:text-gray-700">
                Product
              </Link>
              <Link href="/" className="block text-black hover:text-gray-700">
                About
              </Link>
              <div className="border-t mt-2 pt-2">
                <Link href="/" className="block text-black hover:text-gray-700">
                  <FiUser className="inline-block mr-2" />
                  Account
                </Link>
                <Link href="/" className="block text-black hover:text-gray-700">
                  <FiShoppingCart className="inline-block mr-2" />
                  Cart
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;