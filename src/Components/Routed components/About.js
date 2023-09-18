import React from "react";

import globe from "../logos/globe-free-img.png";
import lock from "../logos/lock-free-img.png";
import quality from "../logos/quality-free-img.png";
import tag from "../logos/tag-free-img.png";

import Footer1 from "../footer1/footer1";
import Footer2 from "../footer2/footer2";
import Span from "../../span";
// import WhyMe from "..//whyMe";

function About() {
  return (
    <div id="Fore">
      <div id="aboutBackground">
        <div className="aboutBackground_container">
          <h1>About Us</h1>
        </div>
      </div>

      <div id="About">
        <div className="about_container">
          <div className="about_content-1">
            <section>
              <span className="element-divider-seperator"></span>

              <p className="h2">Who We Are</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                voluptatem ut reprehenderit consectetur nam ex beatae explicabo
                eos iusto quisquam quaerat reiciendis quos accusamus, fugiat
                laboriosam blanditiis illo. Perferendis tenetur fugit atque
                laboriosam, beatae praesentium.
              </p>
            </section>
            <img src="\images\slide-image-free-img.jpg" alt="" />
          </div>

          <div className="about_content-2">
            <section>
              <div className="element-widget-container">
                <div className="element-widget-divider">
                  <span className="element-divider-seperator"></span>
                </div>
              </div>
              <h3>A Few Words About</h3>
              <h1>Our Team</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem harum modi magnam numquam quisquam culpa laborum quia
                officia exercitationem vel sed et labore consequuntur dicta
                illum nulla, non rerum error.
              </p>
            </section>
            <section className="gridFlex_container">
              <div className="gridFlex_content">
                <div className="imageCon">
                  <img src="/images/example.png" alt="" />
                  <h3>Harvey Spectre</h3>
                  <p>Founder-CEO</p>
                </div>
                <div className="imageCon">
                  <img src="/images/example.png" alt="" />
                  <h3>Jessica Pearson</h3>
                  <p>COO</p>
                </div>
                <div className="imageCon">
                  <img src="/images/example.png" alt="" />
                  <h3>Rachel Zain</h3>
                  <p>Marketing Head</p>
                </div>
                <div className="imageCon">
                  <img src="/images/example.png" alt="" />
                  <h3>Luise Litt</h3>
                  <p>Lead Developer</p>
                </div>
                <div className="imageCon">
                  <img src="/images/example.png" alt="" />
                  <h3>Katrina Bennett</h3>
                  <p>Intern Designer</p>
                </div>
                <div className="imageCon">
                  <img src="/images/example.png" alt="" />
                  <h3>Mike Ross</h3>
                  <p>Intern Designer</p>
                </div>
              </div>
            </section>
          </div>

          <div className="about-content-3">
            <div className="about-content-3_container">
              <div className="element-widget-container">
                <div className="element-widget-divider">
                  <span className="element-divider-seperator"></span>
                </div>
              </div>
              <h2>Follow Us</h2>
              <div className="about-3_link">
                <ul>
                  <li>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 320 512"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 28"
                      >
                        <path d="M12 12.281h11.328c.109.609.187 1.203.187 2C23.515 21.125 18.921 26 11.999 26c-6.641 0-12-5.359-12-12s5.359-12 12-12c3.234 0 5.953 1.188 8.047 3.141L16.78 8.282c-.891-.859-2.453-1.859-4.781-1.859-4.094 0-7.438 3.391-7.438 7.578s3.344 7.578 7.438 7.578c4.75 0 6.531-3.406 6.813-5.172h-6.813v-4.125z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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

      <Span />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default About;
