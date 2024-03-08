import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/css/my_style.css";

import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import Index from "./views/Index.js";
import Build from "./views/IndexSections/Build_page.js";
import Grow from "./views/IndexSections/Grow_page.js";
import Return_ from "./views/stripe/Return.js";
import CheckoutForm from "./views/stripe/CheckoutForm.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/Build_Pay" exact element={<CheckoutForm PRICEINFO="build" />} />
        <Route path="/Grow_Pay" exact element={<CheckoutForm PRICEINFO="grow" />} />
        <Route path="/Exit_Pay" exact element={<CheckoutForm PRICEINFO="exit"/>} />
        <Route path="/build" exact element={<Build />} />
        <Route path="/grow" exact element={<Grow />} />
        <Route path="/return" element={<Return_ />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App;
