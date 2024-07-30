import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { useState } from "react";
import hamburger from "../assets/hamburger.png";
// import Profile from "../pages/Profile";
import Logo from "./ui/Logo";

const NavLinks = () => {
  return (
    <>
      <NavLink
        exact
        to="/home"
        activeclassname="active"
        style={({ isActive }) => {
          return isActive ? { color: "green" } : {};
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        activeclassname="active"
        style={({ isActive }) => {
          return isActive ? { color: "green" } : {};
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        activeclassname="active"
        style={({ isActive }) => {
          return isActive ? { color: "green" } : {};
        }}
      >
        Contact
      </NavLink>
      <NavLink
        to="/profile"
        activeclassname="active"
        style={({ isActive }) => {
          return isActive ? { color: "green" } : {};
        }}
      >
        Profile
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <nav className="flex flex-row ">
          <div className="hidden w-1/2 md:flex justify-around">
            <NavLinks />
          </div>
          <div className="md:hidden flex justify-center mx-5">
            <button onClick={toggleNav}>
              {isOpen ? <X /> : <img src={hamburger} alt="Menu" />}
            </button>
          </div>
          <Logo />
        </nav>
        {isOpen && (
          <div className="basis-full flex flex-col items-center py-4">
            <NavLinks />
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
