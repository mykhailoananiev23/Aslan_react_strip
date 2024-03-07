import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/css/my_style.css";

import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import Index from "./views/Index";
import Build from "./views/stripe/Build.js";
import Grow from "./views/stripe/Grow.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/build" exact element={<Build />} />
        <Route path="/grow" exact element={<Grow />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
