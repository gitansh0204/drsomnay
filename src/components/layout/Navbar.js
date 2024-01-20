import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../media/kslogo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gry">
      <div className="mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex items-center justify-between min-h-16">
          <div className="flex items-center max-w-[20rem]">
            <Link to="/" className="text-gry">
              <img  src={logo} ></img>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline lg:space-x-1 xl:space-x-4 2xl:space-x-6">
              <Link
                to="/"
                className=" px-1 lg:px-3 py-2 rounded-md text-md font-medium hover:text-brown"
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="px-1 lg:px-2 xl:px-3 py-2 rounded-md text-md font-medium hover:text-brown"
              >
                Contact
              </Link>
             
              <Link
                to="/diseases"
                className="px-1 lg:px-2 xl:px-3 py-2 rounded-md text-md font-medium hover:text-brown"
              >
                Conditions
              </Link>
              <Link
                to="/procedures"
                className="px-1 lg:px-2 xl:px-3 py-2 rounded-md text-md font-medium hover:text-brown"
              >
                Procedures
              </Link>
              <Link
                to="/insurances"
                className="px-1 lg:px-2 xl:px-3 py-2 rounded-md text-md font-medium hover:text-brown"
              >
                Insurances
              </Link>
              <Link
                to="/rotations"
                className="px-1 lg:px-2 py-2 rounded-md text-md font-medium hover:text-brown"
              >
                Rotations
              </Link>
             
            
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gry hover:text-brown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FontAwesomeIcon className="text-2xl" icon={faXmark} />
              ) : (
                <FontAwesomeIcon className="text-2xl" icon={faBars} />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gry hover:text-brown"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gry hover:text-brown"
            >
              Contact
            </Link>
            
            <Link
              to="/diseases"
              className="block px-3 py-2 rounded-md text-base font-medium text-gry hover:text-brown"
            >
              Diseases
            </Link>
            <Link
              to="/procedures"
              className="block px-3 py-2 rounded-md text-base font-medium text-gry hover:text-brown"
            >
              Procedures
            </Link>
            <Link
              to="/insurances"
              className="block px-3 py-2 rounded-md text-base font-medium text-gry hover:text-brown"
            >
              Insurances
            </Link>
            <Link
              to="/rotations"
              className="block px-3 py-2 rounded-md text-base font-medium text-gry hover:text-brown"
            >
              Rotations
            </Link>
            
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

