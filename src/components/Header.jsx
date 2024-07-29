import { useState } from "react";
import PropTypes from "prop-types";
import logoIcon from "../assets/logo.png";
import UKIcon from "../assets/uk.png";
import { FaEllipsisV, FaTimes, FaBell } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1f2b6c] flex items-center p-2 sm:p-4 lg:p-6 xl:p-8 2xl:p-10 max-w-9xl mx-auto">
      <div className="w-full max-w-9xl mx-auto relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logoIcon} className="w-14 h-12 object-cover" alt="Logo" />
            <div className="hidden md:flex ml-20 xl:ml-24 2xl:ml-28">
              <NavBar />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 xl:space-x-8 2xl:space-x-10">
            <img src={UKIcon} className="mx-2 w-9 h-4 object-cover" alt="UK Icon" />
            <FaBell className="mx-2 text-white w-7 h-7" />
            <button className="bg-[#159eec] h-10 px-4 rounded-lg text-white text-xs xl:text-sm 2xl:text-base">
              Sign in
            </button>
            <button className="bg-[#bfd2f8] h-10 px-4 rounded-lg text-[#1f2b6c] text-xs xl:text-sm 2xl:text-base">
              Book Appointment
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <FaBell className="text-white w-6 h-6 mr-2" />
            <button onClick={() => setIsOpen(!isOpen)} className="relative">
              {isOpen ? <FaTimes className="text-white w-6 h-6" /> : <FaEllipsisV className="text-white w-6 h-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="absolute inset-x-1/2 transform -translate-x-1/2 bg-[#1f2b6c] rounded-b-3xl shadow-lg w-[260px] z-50">
            <div className="p-4 space-y-4">
              <NavBar isMobile />
              <div className="text-center">
                <img src={UKIcon} className="mt-4 my-2 w-7 h-7 mx-auto mb-4" alt="UK Icon" />
              </div>
              <ul className="space-y-2">
                <li className="flex justify-center">
                  <button className="my-2 bg-[#bfd2f8] h-10 px-4 rounded-lg text-[#1f2b6c] text-xs w-auto">
                    Book Appointment
                  </button>
                </li>
                <li className="flex justify-center">
                  <button className="my-2 bg-[#159eec] h-10 px-4 rounded-lg text-white text-xs w-auto">
                    Sign in
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

const NavLink = ({ title, path, index, isDropdown, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (isDropdown) {
    return (
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`flex items-center text-base ${index === 0 ? "text-white" : "text-[#bfd2f8]"}`}
        >
          {title}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 z-10 bg-[#1f2b6c] divide-y divide-gray-100 rounded-lg shadow w-32">
            <ul className="py-2 text-sm text-[#bfd2f8] ">
              {children}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <a href={path} className={`flex items-center text-base ${index === 0 ? "text-white" : "text-[#bfd2f8]"}`}>
      {title}
    </a>
  );
};

const navList = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "Doctors", path: "/doctors" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  {
    title: "Our Features",
    isDropdown: true,
    dropdownItems: [
      { title: "Feature 1", path: "/feature-1" },
      { title: "Feature 2", path: "/feature-2" },
      { title: "Feature 3", path: "/feature-3" },
    ],
  },
];

NavLink.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  index: PropTypes.number,
  isDropdown: PropTypes.bool,
  children: PropTypes.node,
};

const NavBar = ({ isMobile }) => {
  return (
    <div className={`flex ${isMobile ? "flex-col items-center" : "flex-col md:flex-row md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-14"} space-y-4 md:space-y-0`}>
      {navList.map((link, i) =>
        link.isDropdown ? (
          <NavLink key={i} index={i} title={link.title} isDropdown>
            {link.dropdownItems.map((item, j) => (
              <li key={j} className="flex justify-center">
                <a href={item.path} className="block px-4 py-2 hover:bg-gray-700">
                  {item.title}
                </a>
              </li>
            ))}
          </NavLink>
        ) : (
          <NavLink key={i} index={i} title={link.title} path={link.path} />
        )
      )}
    </div>
  );
};
