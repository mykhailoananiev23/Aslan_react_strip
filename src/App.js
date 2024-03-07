import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/css/my_style.css";

import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import Index from "./views/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
