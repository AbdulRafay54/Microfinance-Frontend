import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/Logo/logo.png";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Only */}
          <Link to="/" className="w-46">
            <img
              className="w-full cursor-pointer"
              src={logo}
              alt="Saylani Microfinance App Logo"
            />
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden  flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <HiOutlineX className="w-6 h-6" />
              ) : (
                <HiOutlineMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex text-gray-800 items-center space-x-6">
            <Link
              to="/about"
              className="hover:text-green-600   transition duration-300 text-lg font-medium"
            >
              About{" "}
            </Link>
            <Link
              to="/services"
              className="hover:text-green-600    transition duration-300 text-lg font-medium "
            >
              Services <span className="underline"></span>
            </Link>

            <Link
              to="/loancategory"
              className="hover:text-green-600   transition duration-300 text-lg font-medium"
            >
              Loan Information
            </Link>

            <button
              className="hover:text-green-600   cursor-pointer transition duration-300 text-lg font-medium"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="flex flex-col space-y-4 p-4 text-center">
              <Link
                to="/about"
                className="hover:text-customGreen transition duration-300 text-lg font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>

              <Link
                to="/services"
                className="hover:text-customGreen transition duration-300 text-lg font-medium"
                onClick={toggleMenu}
              >
                Services{" "}
              </Link>

              <Link
                to="/loancategory"
                className="hover:text-customGreen transition duration-300 text-lg font-medium"
                onClick={toggleMenu}
              >
                Loan Information 
              </Link>

              <button
                className="hover:text-customGreen transition duration-300 text-lg font-medium"
                onClick={() => {
                  navigate("/login");
                  toggleMenu();
                }}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
