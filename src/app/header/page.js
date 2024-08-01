"use client";
import React, { useState } from "react";
import "./header.css";
import { CiSearch, CiHeart } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi2";
import { IoBagRemoveOutline } from "react-icons/io5";

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="top-bar">
        <div className="top-bar-item">Lorem ipsum dolor</div>
        <div className="top-bar-item">Lorem ipsum dolor</div>
      </div>
      <div className="nav-bar">
        <div className="logo">
          <img
            className="image-logo"
            src="https://img.freepik.com/premium-vector/vector-graphics-celtic-knot-resembling-cross-isolated-transparent-background_764382-4226.jpg"
            alt="Logo"
          />
        </div>
        <h2>LOGO</h2>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <div className={`icons ${menuOpen ? "icons--open" : ""}`}>
          <a href="#">
            <i className="icon-search">
              <CiSearch />
            </i>
          </a>
          <a href="#">
            <i className="icon-heart">
              <CiHeart />
            </i>
          </a>
          <a href="#">
            <i className="icon-user">
              <IoBagRemoveOutline />
            </i>
          </a>
          <a href="#">
            <i className="icon-cart">
              <HiOutlineUser />
            </i>
          </a>
          <div className="language-selector">
            <span>ENG</span>
            <i className="icon-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className={`nav-div ${menuOpen ? "nav-div--open" : ""}`}>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">SKILLS</a>
            </li>
            <li>
              <a href="#">STORIES</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Page;
