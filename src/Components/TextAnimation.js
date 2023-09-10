import React from "react";
import Typewriter from "typewriter-effect";
import "./TextAnimation.css"


function TextAnimation() {
  return (
    <div>
          
          <span className="typewriter_container">
       <Typewriter
            options={{
            autoStart: true,
            loop: true,
                  delay: 50,
            strings: [
              "Web Developer", 
              "Search Engine Optimizer",
              "Front-end Developer",
              "Performance Tester",
            ],
          }}
        /></span>
      
    </div>
  );
}

export default TextAnimation;
