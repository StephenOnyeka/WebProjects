import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./logo.svg";
import "./App.css";

import NVBar from "./Components/NVBar";
import Home from "./Components/Home";
import Portfolio from "./Components/Reviews";
import About from "./Components/About";
import WhyMe from "./Components/Why me";
import SwiperAni from "./Components/swiperAni";
import Services from "./Components/Services";
import Contact from "./Components/contact";
import Footer from "./Components/Footer"; 

function App() {
  useEffect(() => {
    AOS.init({ duration: 1250 });
  }, []);

  return (
    <div className="App">
      {/* <Logo /> */}
      <div><NVBar/></div>
      <div data-aos="fade-up">
        <Home />
      </div>
      <div data-aos="fade-up">
        <Portfolio />
      </div>
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-up">
        <Services />
      </div>
      <div><WhyMe/></div>
      <div data-aos="fade-up">
        <SwiperAni />
      </div>
      <div data-aos="fade-up">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
