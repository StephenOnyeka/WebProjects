import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import About from "./Components/Routed components/About";
import ContactUs from "./Components/Routed components/ContactUs";
import Everything from "./Components/Routed components/everything";
import FindMore from "./Components/Routed components/FindMore";
import Accessories from "./Components/Routed components/accessories";
import Men from "./Components/Routed components/men";
import Women from "./Components/Routed components/women";
import ProductDescription from "./Components/Routed components/productDescription";
import DEScription from "./Components/Routed components/DEScription";
import REViews from "./Components/Routed components/REViews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="everything" element={<Everything />} />
      <Route path="findMore" element={<FindMore />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="order-summary" element={<ProductDescription />}>
        <Route index element={<DEScription/> } />
        <Route path="description" element={<DEScription/>} />
        <Route path="reviews" element={<REViews/>} />
      </Route>
    </Routes>
  );
}

export default App;
