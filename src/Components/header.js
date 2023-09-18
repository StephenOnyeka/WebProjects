import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div id="header">
      <div className="header_container">
        <h1>
          Raining Offers For <br />
          Hot Summer!
        </h1>
        <h5>25% Off On All Products</h5>
        <button id="shop_now">SHOP NOW</button>
        <button onClick={() => navigate("FindMore")} id="find_more"> FIND MORE </button>
      </div>
    </div>
  );
}

export default Header;
