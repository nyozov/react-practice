import React from "react";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <header className="w-full absolute top-0 left-0 h-12 border border-gray-200 shadow-sm flex gap-2 justify-center items-center">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/hook">Hook</NavLink>
    </header>
  );
};

export default Navbar;
