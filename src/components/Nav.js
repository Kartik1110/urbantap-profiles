import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./ui/Logo";
import SearchListing from "./SearchListing";
import { useNavigate } from "react-router-dom";

const NavLinkList = () => {
  return (
    <>
      <NavLink
        exact
        to="/home"
        activeclassname="active"
        style={({ isActive }) => (isActive ? { color: "green" } : {})}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        activeclassname="active"
        style={({ isActive }) => (isActive ? { color: "green" } : {})}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        activeclassname="active"
        style={({ isActive }) => (isActive ? { color: "green" } : {})}
      >
        Contact
      </NavLink>
      <NavLink
        to="/profile"
        activeclassname="active"
        style={({ isActive }) => (isActive ? { color: "green" } : {})}
      >
        Profile
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const backToProfile = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="px-5 flex flex-col w-full">
        <nav className="flex flex-col">
          {/* <div className="hidden w-1/2 md:flex justify-around">
            <NavLinkList />
          </div>
          <div className="md:hidden flex justify-center mx-5">
            <button onClick={toggleNav}>
              {isOpen ? <X /> : <img src={hamburger} alt="Menu" />}
            </button>
          </div> */}
          {location.pathname.includes("/profile") && <Logo />}
          {(location.pathname === "/listings" || location.pathname === "/") && (
            <button 
              onClick={backToProfile} 
              className="w-[112px] h-[34px] bg-gradient-to-b from-[#4DD969] to-[#28CD56] rounded-[30px] text-center font-medium text-sm font-inter leading-[17px] text-black"
            >
              Back to profile
            </button>
          )}
          {location.pathname === "/listings" && <SearchListing />}
        </nav>
        {isOpen && (
          <div className="basis-full flex flex-col items-center py-4">
            <NavLinkList />
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
