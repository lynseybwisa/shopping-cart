import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" index element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
