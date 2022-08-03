import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="app">
      <Header />
      <Searchbar />
    </div>
  </React.StrictMode>
);
