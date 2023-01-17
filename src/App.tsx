import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/HomePage";
import Store from "./pages/Store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" index element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
