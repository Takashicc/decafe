import React, { useState } from "react";
import "../styles/Login.css";
import "../styles/Image.css";
import { Fragment } from "react";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Photoheader: React.FC = () => {
  return (
    <Router>
      <div className="imagewrapper">
        <Link to="images/ID1SID1.jpg">
          <img src={"images/ID1SID1.jpg"} className="image" />
        </Link>
        <img src={"images/ID1SID2.jpg"} className="image" />
        <img src={"images/ID1SID3.jpg"} className="image" />
        <img src={"images/ID1SID4.jpg"} className="image" />
        <img src={"images/ID1SID5.jpg"} className="image" />
      </div>
    </Router>
  );
};

export default Photoheader;
