import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" reloadDocument></Link>
      <div className="shopLinkWrapper">
        <Link to="/login">Cafe Owners</Link>
      </div>
    </div>
  );
};

export default Header;
