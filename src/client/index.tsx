import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShopMain from "./components/ShopMain";
import PhotoHeader from "./components/PhotoHeader";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <Router>
      <Link to="/shops/1">Shop 1</Link>
      <Link to="/shops/2">Shop 2</Link>
      <Link to="/shops/3">Shop 3</Link>
      <Link to="/shops/4">Shop 4</Link>
      <Link to="/shops/5">Shop 4</Link>
      <Link to="/shops/6">Shop 4</Link>

      <Routes>
        <Route path="/shops/:id" element={<ShopMain />} />
      </Routes>
    </Router>
  </>
);
