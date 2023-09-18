import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

function ProductDescription() {
  const navigate = useNavigate();
  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     fontWeight: isActive ? 'bold' : 'normal',
  //     textDecoration: isActive ? 'underline' :'underline'
  //   }
  // }
  return (
    <div id="productDescription">
      <div className="productDescription_container">
        <div className="productDescription_content-1">
          <section>
            <img src="\images\Products\Fendi-red.png" alt="" />
          </section>

          <section>
            <p>
              Home/ Men/ DNK Yellow Shoes
              <p>
                Men<h1>DNK Yellow Shoes</h1>
              </p> 
            </p>
            <h2>
              $120.00 <span>+ Free Shipping</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              aperiam dolorum dolores, rem minima delectus nisi eveniet beatae?
              Non eligendi laudantium officia dolorum error similique magni,
              distinctio veritatis molestiae voluptatum necessitatibus nostrum
              nemo ad rerum eius laborum aperiam dolores cumque.
            </p>
            <input type="number" name="age" id="" /> <button>ADD TO CART</button>
            <br />
            <hr />
            <p>Category: Men</p>
          </section>
        </div>

        <div className="productDescription_content-2">
          <nav id="inline-navlink">
            <Link to="description">Description</Link>
            <Link to="reviews">Reviews</Link>
          </nav>
          <Outlet/>
        </div>

        <div className="productDescription_content-3">
          <p>Related Products</p>
          <div className="relatedProducts_container">
            <div className="relatedProducts_cards">
              <img src="\images\Products\A-red.png" alt="" />
            <h4>Red Printed T-shirts</h4>
            <span>Men</span>
            <p>$50.00</p>
            </div>
            
          </div>

        </div>
      </div>
      <button onClick={() => navigate(-1)}> Go back</button>
    </div>
  );
}

export default ProductDescription;
