import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const OpenMobileMenu = () => {
    document.querySelector(".nav-mobile").classList.add("nav-menu-showed");
  };
  const closeMobileMenu = () => {
    document.querySelector(".nav-mobile").classList.remove("nav-menu-showed");
  };
  return (
    <div className="nav">
      <div className="logo">SNEAK SHOT</div>
      <div className="nav-links ">
        <li>Home</li>
        <li>Shop</li>
        <li>Forum</li>
        <li>About</li>
        <li>Contact</li>
      </div>

      <div className="nav-icons">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="nav-btn-search FA-icon"
        />
        <FontAwesomeIcon icon={faUser} className="nav-btn-user FA-icon" />
        <FontAwesomeIcon icon={faHeart} className="nav-btn-wishlist FA-icon" />
        <FontAwesomeIcon icon={faBagShopping} className="nav-btn-bag FA-icon" />
        <FontAwesomeIcon
          icon={faBars}
          className="nav-btn-menu FA-icon"
          onClick={OpenMobileMenu}
        />
      </div>

      <div className="nav-mobile">
        <div className="icon-row">
          <FontAwesomeIcon icon={faUser} className="nav-btn-user FA-icon" />
          <FontAwesomeIcon
            icon={faHeart}
            className="nav-btn-wishlist FA-icon"
          />
          <FontAwesomeIcon
            icon={faXmark}
            className="nav-btn-closes FA-icon"
            onClick={closeMobileMenu}
          />
        </div>
        <ul>
          <li nav-mobile-link>Home</li>
          <li nav-mobile-link>Shop</li>
          <li nav-mobile-link>Forum</li>
          <li nav-mobile-link>About</li>
          <li nav-mobile-link>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
