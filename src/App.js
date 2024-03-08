import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/css/my_style.css";

import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import Index from "./views/Index";
import Pay from "./views/stripe/Pay.js";
import { useState } from "react";
import Count from './counter.js'
function App() {
  return (
  //   <Provider store={store}>
  //   <App />
  // </Provider>,
    <BrowserRouter>
      <Routes>
        <Route path="/"    exact element={<Index />} />
        <Route path="/Pay1" exact element={<Pay PRICEINFO={950}  />} />
        <Route path="/Pay2" exact element={<Pay PRICEINFO={2950}  />} />
        <Route path="/Pay3" exact element={<Pay PRICEINFO={8950}  />} />

        <Route path="/counter" exact element={<Count  />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
