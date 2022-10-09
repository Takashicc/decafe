import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/header.css";

const AuthHeader = () => {
  return (
    <div className="header">
      <div className="picWrapper">
        <Link to="/" reloadDocument>
          <img
            className="logoPic"
            width="50"
            src="https://i.im.ge/2022/08/03/FCRHSS.logo-cafe.jpg"
            alt="logo cafe"
          />
        </Link>
      </div>
      <div className="welcomeMessageWrapper">Welcome, Mr. Shop Owner!</div>
      <div className="shopLinkWrapper">
        <Link to="/login">Logout</Link>
      </div>
    </div>
  );
};

export default AuthHeader;
