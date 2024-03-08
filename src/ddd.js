import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/css/my_style.css";

import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import Index from "./views/Index.js";
import Pay from "./App.js";
import Build from "./views/IndexSections/Build_page.js";
import Grow from "./views/IndexSections/Grow_page.js";

function App() {
  return (
  //   <Provider store={store}>
  //   <App />
  // </Provider>,
    <BrowserRouter>
      <Routes>
        <Route path="/"    exact element={<Index />} />
        <Route path="/Build_Pay" exact element={<Pay PRICEINFO={950}  />} />
        <Route path="/Grow_Pay" exact element={<Pay PRICEINFO={2950}  />} />
        <Route path="/Exit_Pay" exact element={<Pay PRICEINFO={8950}  />} />
        <Route path="/build"    exact element={<Build />} />
        <Route path="/grow"    exact element={<Grow />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
