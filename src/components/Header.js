import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../shared/logo.svg";
import { FiMenu } from "react-icons/fi"

function Header() {
  const handleClick = () =>{
    const navbar = document.getElementById("navbar")
    navbar.classList.toggle("open")
  }
  return (
    <>
      <header className="header px-5 flex items-center justify-between">
        <div className="py-5">
          <NavLink to="/" />
          <img src={logo} alt="" title="Travel to Space" />
        </div>
        <nav id="navbar">
          <ul className="flex items-center">
            <li className="mx-2 py-5 text-gray-400 font-semibold">
              <NavLink
                to="/"
                exact
                activeClassName="text-white border-b-4 border-white pb-7"
              />
              <span>00</span> Home
            </li>
            <li className="mx-2 py-5 text-gray-400 font-semibold">
              <NavLink
                to="/destination"
                exact
                activeClassName="text-white border-b-4 border-white pb-7"
              />
              <span>01</span> Destination
            </li>
            <li className="mx-2 py-5 text-gray-400 font-semibold">
              <NavLink
                to="/crew"
                exact
                activeClassName="text-white border-b-4 border-white pb-7"
              />
              <span>02</span> Crew
            </li>
            <li className="mx-2 py-5 text-gray-400 font-semibold">
              <NavLink
                to="/technology"
                exact
                activeClassName="text-white border-b-4 border-white pb-7"
              />
              <span>03</span> Technology
            </li>
          </ul>
        </nav>
        <div className="menu">
          <button id="menu" onClick={handleClick}>
            <FiMenu className="text-white text-4xl" />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
