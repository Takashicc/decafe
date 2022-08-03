import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../styles/header.css";

export default function Header() {
  return (
    <Router>
      <div className="header">
        <div className="picWrapper">
          <img
            className="logoPic"
            width="50"
            src="https://i.im.ge/2022/08/03/FCRHSS.logo-cafe.jpg"
            alt="logo cafe"
          />
        </div>
        <div className="shopLinkWrapper">
          <Link to="/login">Shop Login</Link>
        </div>
      </div>
    </Router>
  );
}

//<Route path="/about" component={Login} />
