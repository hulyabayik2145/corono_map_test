import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPages";
import DetailPage from "./pages/DetailPages";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/detail/:country" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
