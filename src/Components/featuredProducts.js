import { React, useState, useEffect } from "react";
import { useNavigate, Link, UNSAFE_DataRouterContext } from "react-router-dom";
import data from '../products.json'

import globe from "./logos/globe-free-img.png";
import lock from "./logos/lock-free-img.png";
import quality from "./logos/quality-free-img.png";
import tag from "./logos/tag-free-img.png";

function FeaturedProducts() {
  const navigate = useNavigate();

  // const [fake, setFake] = useState([]);
  // console.log(fake);

  // useEffect(() => {
  //     const fakestore = async () => {
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       // console.log(response);
  //       const jsonData = await response.json();
  //       // console.log(jsonData);
  //       setFake(jsonData);
  //     };
  //     fakestore();
  // }, []);

  // const fakestore = async () => {
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   // console.log(response);
  //   const jsonData = await response.json();
  //   // console.log(jsonData);
  //   setFake(jsonData);
  // };
  // fakestore();

  return (
    <div className="BG">
      <div id="FeaturedProducts">
        <p id="h4">
          Featured Products
          <div className="element-widget-divider">
            <span className="element-divider-seperator"></span>
          </div>
        </p>
        {/* <div className="element-widget-container"> </div> */}
        <div className="featuredProducts_container">

          {
            data.map((values)=>{
              return (
                <div className="product_cards" key={values.id}>
                  <a href="" onClick={() => navigate("order-summary")}>
                    <img src={values.image} alt="" />
                  </a>
                  <h4>Red Printed T-shirts</h4>
                  <span>{values.category}</span>
                  <p> { values.price}</p>
                </div>
              );
            })
          }  
         


          {/* {fake.map((values) => {
        return (
          <>
            <div className="product_cards">
              <img src={values.image} alt="" />
              <h4>{values.title}</h4>
              <span>{values.category}</span>
              <div>
                <br />
                <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-half"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
              </div>
              
              
              <p>{values.price}</p>
            </div>
          </>
        );
  })} */}

          <div className="product_cards">
            <a href="" onClick={() => navigate("order-summary")}>
              <img src="\images\Products\Fendi-red.png" alt="" />
            </a>
            <h4>Red Printed T-shirts</h4>
            <span>Men</span>
            <p>$50.00</p>
          </div>

          <div className="product_cards">
            <a href="">
              <img src="\images\Products\Fendi-red.png" alt="" />
            </a>
            <h4>Red Printed T-shirts</h4>
            <span>Men</span>
            <p>$50.00</p>
          </div>

          <div className="product_cards">
            <a href="">
              <img src="\images\Products\A-red.png" alt="" />
            </a>
            <h4>Red Printed T-shirts</h4>
            <span>Men</span>
            <p>$50.00</p>
          </div>

          <div className="product_cards">
            <a href="">
              <img src="\images\Products\Fendi-red.png" alt="" />
            </a>
            <h4>Red Printed T-shirts</h4>
            <span>Women</span>
            <p>$50.00</p>
          </div>

          <div className="product_cards">
            <a href="">
              <img src="\images\Products\blue-shirt.png" alt="" />
            </a>
            <h4>Red Printed T-shirts</h4>
            <span>Women</span>
            <p>$50.00</p>
          </div>

          <div className="product_cards">
            <a href="">
              <img src="\images\Products\Fendi-red.png" alt="" />
            </a>
            <h4>Red Printed T-shirts</h4>
            <span>Men</span>
            <p>$50.00</p>
          </div>

          <div className="product_cards">
            <a href="">
              <img src="\images\Products\A-red.png" alt="" />
            </a>
            <h4>Red Printed T-shirts</h4>
            <span>Men</span>
            <p>$50.00</p>
          </div>

          <div className="product_cards">
            <a href="">
              <img src="\images\Products\Fendi-red.png" alt="" />
            </a>
            <h4>Red Printed T-shirts</h4>
            <span>Men</span>
            <p>$50.00</p>
          </div>

          <div className="product_cards">
            <a href="">
              <img src="\images\Products\A-red.png" alt="" />
            </a>
            <h4>Red Printed T-shirts</h4>
            <span>Men</span>
            <p>$50.00</p>
          </div>

          <div className="product_cards">
            <a href="">
              <img src="\images\Products\A-red.png" alt="" />
            </a>
            <h4>Red Printed T-shirts</h4>
            <span>Men</span>
            <p>$50.00</p>
          </div>
        </div>
      </div>

      <div id="midBackground">
        <div className="midBackground_container">
          <div className="midBackground_content">
            <h4>Limited Time Offer</h4>
            <h1> Special Edition</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              voluptatem <br />
              nostrum tempora aliquid. Cumque expedita animi nulla reiciendis.
            </p>
            <h4>Buy This T-shirt At 20% Discount, Use Code OFF20</h4>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>

      <div id="whyMe">
        <div className="whyMe_container">
          <div className="description">
            <img src={globe} alt="" />
            <h3>Worldwide Shipping</h3>
            <p>
              I put in the work to ensure the best of quality projects for my
              clients.
            </p>
          </div>
          <div className="description">
            <img src={quality} alt="" />
            <h3>Best Quality</h3>
            <p>
              I put in the work to ensure the best of quality projects for my
              clients.
            </p>
          </div>
          <div className="description">
            <img src={tag} alt="" />
            <h3>Best Offers</h3>
            <p>
              I put in the work to ensure the best of quality projects for my
              clients.
            </p>
          </div>
          <div className="description">
            <img src={lock} alt="" />
            <h3>Secure Payments</h3>
            <p>
              I put in the work to ensure the best of quality projects for my
              clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
