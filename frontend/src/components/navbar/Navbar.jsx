import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">SNEAK SHOT</div>
      <div className="nav-links ">
        <li className="">Home</li>
        <li>Shop</li>
        <li>Forum</li>
        <li>About</li>
        <li>Contact</li>
      </div>

      <div className="nav-icons">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-btn-search" />
        <FontAwesomeIcon icon={faUser} className="nav-btn-user" />
        <FontAwesomeIcon icon={faHeart} className="nav-btn-wishlist" />
        <FontAwesomeIcon icon={faBagShopping} className="nav-btn-bag" />
      </div>

      <FontAwesomeIcon icon={faBars} className="nav-btn-menu" />
    </div>
  );
};

export default Navbar;
