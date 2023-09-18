import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./nav.css";

function NVBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [icon, setIcon] = useState(false);

  return (
    <nav id="navlink">
      <Link to="/" className="title">
        DNK
      </Link>

      <ul id="coll_menu">
        <li>
          <Link to="/everything">EVERYTHING</Link>
        </li>
        <li>
          <Link to="/women">WOMEN</Link>
        </li>
        <li>
          <Link to="/men">MEN</Link>
        </li>
        <li>
          <Link to="/accessories">ACCESSORIES</Link>
        </li>
      </ul>

      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <i
          className={icon ? "fas fa-times" : "fas fa-bars"}
          onClick={() => {
            setIcon(!icon);
          }}
        ></i>
      </div>

      <ul className={menuOpen ? "open" : ""} id="options">
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contactUs">CONTACT US</Link>
        </li>
        <li>
          <Link to=" ">$0.00</Link>
        </li>
        <li>
          <Link to="/"> {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
           
          </Link>
        </li>
        <li>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NVBar;
