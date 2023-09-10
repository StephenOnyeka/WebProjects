import React from "react";
import TextAnimation from "./TextAnimation";

function Home() {
  return (
    <div>
      {" "}
      <div id="Home">
        <div id="home_container">
          <section id="home_content">
            <span className="circle one"></span>
            <span className="circle two"></span>
            <span className="circle three"></span>
            <span className="circle four"></span>
            <span className="circle five"></span>
            <span className="circle six"></span>
            <h3>A Tech practitioner with over years of experience.</h3>
            <span><p>Onyeka Stephen</p></span>
          
            <h2> <TextAnimation /> </h2>
            <p>
              Gained massive knowledge after working with many individuals on
              projects that supersedes expertise. Looking forward to working
              with you...
            </p>
          </section>
                      
          <div class="home-img"> 
              <img src=".\images\man on laptop.png" alt="" />
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
