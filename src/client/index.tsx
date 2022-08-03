import React from "react";
import Header from "./components/Header";
import "./styles/header.css";
import "./styles/styles.css";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  (<React.StrictMode>
    <div className="app">
      <Header />
    </div>
  </React.StrictMode>)
);