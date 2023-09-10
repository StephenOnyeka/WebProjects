import React, { useState } from "react";
// import { Link } from "react-router-dom"
import "./nav.css";

function NVBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [icon, setIcon] = useState(false);

  return (
    <nav>
      <a href="/" className="title">
        Explore
      </a>
 
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

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#Home">Home</a>{" "}
        </li>
        <li>
          <a href="#About">About</a>{" "}
        </li> 
        <li>
          <a href="#Services"> Services</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default NVBar;
