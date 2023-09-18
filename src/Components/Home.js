import React from "react";
import "../App.css";

import NVBar from "./navbar/NVBar";
import Header from "./header";
import Logo from "./swiper/swiper";
import Random from "./random";
import FeaturedProducts from "./featuredProducts";
// import MidBackg from "./midBackg";
// import WhyMe from "./whyMe";
import Span from "../span";
import Footer1 from "./footer1/footer1";
import Footer2 from "./footer2/footer2";

// import Everything from "./Components/Routed components/everything";
// import About from "./Components/Routed components/About";

function Home() {
  return (
    <div>
      <NVBar />
      <Header />
      <Logo />
      <Random />
      <FeaturedProducts />
      {/* <MidBackg /> */}
      {/* <WhyMe /> */}
      <Span />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default Home;

// import React from "react";
// import "./App.css";

// import NVBar from "./Components/navbar/NVBar";
// import Header from "./Components/header";
// import Logo from "./Components/swiper/swiper";
// import Random from "./Components/random";
// import FeaturedProducts from "./Components/featuredProducts";
// import MidBackg from "./Components/midBackg";
// import WhyMe from "./Components/whyMe";
// import Span from "./span";
// import Footer1 from "./Components/footer1/footer1";
// import Footer2 from "./Components/footer2/footer2";
