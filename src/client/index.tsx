import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShopDetail from "./components/ShopDetail";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <div>Hello!</div>
    <Router>
      <Link to="/shops/3">Shop 3</Link>
      <Link to="/shops/4">Shop 4</Link>
      <Routes>
        <Route path="/shops/:id" element={<ShopDetail />} />
      </Routes>
    </Router>
  </>
);
