import React from "react";
import NVBar from "../navbar/NVBar";

import Footer1 from "../footer1/footer1";
import Footer2 from "../footer2/footer2";
import Span from "../../span";

function ContactUs() {
  return (
    <>
      <NVBar />
      <div id="contactUs-Background">
        <div className="contactUs-Background_container">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div id="ContactUs">
        <div className="ContactUs_container">
          <div className="ContactUs_content-1">
            <section>
              <h3>
                Have any queries?
                <h1>
                  We're here to help.
                  <div className="element-widget-divider">
                    <span className="element-divider-seperator"></span>
                  </div>
                </h1>
              </h3>

              <section className="grid-Flex_container">
                <div className="grid-Flex_content">
                  <div className="imageCon">
                    <h2>Sales</h2>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p className="h4">1800 123 4567</p>
                  </div>
                  <div className="imageCon">
                    <h2>Complaints</h2>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p className="h4">1900 223 8899</p>
                  </div>
                  <div className="imageCon">
                    <h2>Returns</h2>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p className="h4">returns@mail.com</p>
                  </div>
                  <div className="imageCon">
                    <h2>Marketing</h2>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p className="h4">1700 444 5578</p>
                  </div>
                </div>
              </section>
            </section>

            <div className="ContactUs_content-2">
              <div className="ContactUs_content-2_container">
                <section id="mainContent">
                  <p id="h4">
                    Don't be a stranger! <p id="h6"> You tell us. We listen.</p>
                  </p>

                  <p id="description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Est, nulla eaque, ipsa veniam repellat consequatur animi
                    quaerat quibusdam facere enim esse aut nemo, repudiandae
                    excepturi dolorem. Libero odio dolorum repellendus?
                  </p>
                </section>
                <section>
                  <form action="">
                    <input type="text" placeholder="NAME" />
                    <input type="text" placeholder="SUBJECT" />
                    <input type="text" placeholder="EMAIL" />
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="MESSAGE"
                    ></textarea>
                    <button>SEND MESSAGE</button>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Span />
      <Footer1 />
      <Footer2 />
    </>
  );
}

export default ContactUs;
