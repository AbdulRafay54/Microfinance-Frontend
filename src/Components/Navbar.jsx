import React, { useState, useEffect } from "react";
import logo from "../../public/Logo/logo.png";
import { Link } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone, FaUserCircle } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkIfLoggedIn = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setIsLoggedIn(false);
      return false;
    }

    try {
      const response = await fetch("/api/users/check-status", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error checking login status:", error);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo with Link */}
        <Link to="/" className="w-36">
          <img className="w-full cursor-pointer" src={logo} alt="Saylani Logo" />
        </Link>

        {/* Links for Desktop */}
        <div className="hidden md:flex gap-6 text-gray-800 font-medium">
          <Link to="/" className="hover:text-customGreen transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-customGreen transition duration-300">
            About
          </Link>
          <Link to="/services" className="hover:text-customGreen transition duration-300">
            Services
          </Link>
          <Link to="/loan-information" className="hover:text-customGreen transition duration-300">
            Loan Information
          </Link>
        </div>

        {/* Conditional Rendering for Login/Profile */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <Link to="/profile">
              <FaUserCircle className="text-2xl text-customGreen cursor-pointer" />
            </Link>
          ) : (
            <PrimaryBtn
              routLink="/login"
              additinalClasses="bg-green-700 hover:bg-green-600 px-4 py-2 rounded-md text-white"
              BtnText="Login"
            />
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-800">
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 text-gray-800 shadow-lg py-4">
          <ul className="flex flex-col items-center gap-4">
            <Link to="/" onClick={toggleMenu} className="hover:text-customGreen">
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-customGreen">
              About
            </Link>
            <Link to="/services" onClick={toggleMenu} className="hover:text-customGreen">
              Services
            </Link>
            <Link to="/loan-information" onClick={toggleMenu} className="hover:text-customGreen">
              Loan Information
            </Link>
          </ul>
          <div className="mt-4">
            {isLoggedIn ? (
              <Link to="/profile" onClick={toggleMenu}>
                <FaUserCircle className="text-2xl text-customGreen mx-auto" />
              </Link>
            ) : (
              <PrimaryBtn
                routLink="/login"
                additinalClasses="bg-green-700 hover:bg-green-600 px-4 py-2 rounded-md text-white"
                BtnText="Login"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
