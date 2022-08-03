import React from "react";
import "../styles/searchbar.css";

export default function Header() {
  return (
    <div className="searchbarWapper">
      <input type="search" placeholder="where?" />
      <button>a button</button>
    </div>
  );
}
