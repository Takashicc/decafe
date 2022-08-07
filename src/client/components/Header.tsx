import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" reloadDocument></Link>
      <div className="shopLinkWrapper">
        <Link to="/owners/login">Cafe Owners</Link>
      </div>
      <div className="shopLinkWrapper">
        <Link to="/owners/logout">Cafe Owners Logout</Link>
      </div>
      <div className="shopLinkWrapper">
        <Link to="/shops/new">Create shop</Link>
      </div>
    </div>
  );
};

export default Header;
